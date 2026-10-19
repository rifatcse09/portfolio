import { execFile } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { promisify } from "node:util";
import { preview } from "vite";

const execFileAsync = promisify(execFile);

const routes = [
  "/",
  "/services/ai-backends",
  "/services/saas-integrations",
  "/services/rag-and-agents",
  "/projects/bridgeopsone",
  "/projects/sms-platform",
  "/projects/rewardsx",
  "/projects/docs-rag-mcp",
];

const chrome = process.env.CHROME_PATH || "google-chrome";

const bootMarkup = `<div id="boot" aria-hidden="true">
      <div class="boot-nav"><span class="boot-mark">rifatul.site</span><span class="boot-pills"><span class="boot-bar" style="width:3.2rem;height:0.7rem"></span><span class="boot-bar" style="width:2.4rem;height:0.7rem"></span><span class="boot-bar" style="width:3rem;height:0.7rem"></span><span class="boot-pill"></span></span></div>
      <div class="boot-hero"><div><span class="boot-bar boot-line"></span><span class="boot-bar boot-title"></span><span class="boot-bar boot-title short"></span><span class="boot-bar boot-sub"></span><span class="boot-bar boot-btn"></span></div><div class="boot-portrait"></div></div>
    </div>
    <script>document.documentElement.classList.add("boot-lock");window.__bootAt=Date.now();window.setTimeout(function(){var el=document.getElementById("boot");if(!el)return;document.documentElement.classList.remove("boot-lock");el.remove();},8000);</script>`;

const server = await preview({
  preview: { host: "127.0.0.1", port: 4173, strictPort: true },
});

try {
  for (const route of routes) {
    const url = `http://127.0.0.1:4173${route === "/" ? "/" : route}`;
    const { stdout } = await execFileAsync(
      chrome,
      [
        "--headless",
        "--disable-gpu",
        "--disable-background-networking",
        "--no-first-run",
        "--window-size=1440,2400",
        "--virtual-time-budget=12000",
        "--dump-dom",
        url,
      ],
      { maxBuffer: 30 * 1024 * 1024, timeout: 45000 }
    );
    const html = stdout.trim();
    if (!html.includes("<title") || !html.includes("rifatul")) {
      throw new Error(`Prerender produced an empty page for ${route}`);
    }
    const file = route === "/" ? "dist/index.html" : `dist${route}/index.html`;
    await mkdir(dirname(file), { recursive: true });
    const page = html.startsWith("<!") ? html : `<!DOCTYPE html>\n${html}`;
    await writeFile(file, page.includes('id="boot"') ? page : page.replace("<body>", `<body>\n${bootMarkup}`));
    console.log(`prerendered ${file}`);
  }
} finally {
  await new Promise((resolve, reject) => {
    server.httpServer.close((error) => (error ? reject(error) : resolve()));
  });
}
