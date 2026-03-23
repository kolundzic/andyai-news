const routes = [
  { path: "/", name: "home" },
  { path: "/archive", name: "archive" },
  { path: "/admin", name: "admin" },
];

const baseUrl = process.env.APP_BASE_URL || "http://localhost:3000";

let failed = false;

async function checkRoute(route) {
  const url = `${baseUrl}${route.path}`;
  try {
    const res = await fetch(url, {
      redirect: "manual",
    });

    const ok =
      (res.status >= 200 && res.status < 400) ||
      res.status === 401 ||
      res.status === 403;

    if (!ok) {
      console.error(`FAIL ${route.name} ${route.path} -> ${res.status}`);
      failed = true;
      return;
    }

    const text = await res.text();

    if (!text || text.length < 50) {
      console.error(`FAIL ${route.name} ${route.path} -> suspiciously small response`);
      failed = true;
      return;
    }

    console.log(`PASS ${route.name} ${route.path} -> ${res.status}`);
  } catch (err) {
    console.error(`FAIL ${route.name} ${route.path} -> ${err.message}`);
    failed = true;
  }
}

for (const route of routes) {
  await checkRoute(route);
}

if (failed) {
  process.exit(1);
} else {
  console.log("All smoke routes passed.");
}
