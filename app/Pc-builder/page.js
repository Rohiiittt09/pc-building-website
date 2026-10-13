
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const categories = [
  {
    id: "cpu",
    name: "Processor",
    icon: "◈",
    options: [
      { id: "cpu1", name: "AMD Ryzen 5 7600", price: 18999, specs: "6 Cores · AM5", socket: "AM5", watts: 65 },
      { id: "cpu2", name: "AMD Ryzen 7 7800X3D", price: 35999, specs: "8 Cores · AM5", socket: "AM5", watts: 120 },
      { id: "cpu3", name: "Intel Core i5-14400F", price: 17999, specs: "10 Cores · LGA1700", socket: "LGA1700", watts: 65 },
    ],
  },
  {
    id: "motherboard",
    name: "Motherboard",
    icon: "▦",
    options: [
      { id: "mb1", name: "MSI B650 Gaming Plus", price: 16999, specs: "AM5 · DDR5 · ATX", socket: "AM5", memory: "DDR5", form: "ATX" },
      { id: "mb2", name: "Gigabyte B650M DS3H", price: 12999, specs: "AM5 · DDR5 · mATX", socket: "AM5", memory: "DDR5", form: "mATX" },
      { id: "mb3", name: "MSI B760 Gaming Plus", price: 15999, specs: "LGA1700 · DDR5 · ATX", socket: "LGA1700", memory: "DDR5", form: "ATX" },
    ],
  },
  {
    id: "gpu",
    name: "Graphics Card",
    icon: "▰",
    options: [
      { id: "gpu1", name: "NVIDIA RTX 4060 8GB", price: 28999, specs: "8GB VRAM", watts: 115, length: 250 },
      { id: "gpu2", name: "NVIDIA RTX 4070 Super", price: 59999, specs: "12GB VRAM", watts: 220, length: 300 },
      { id: "gpu3", name: "AMD Radeon RX 7600", price: 25999, specs: "8GB VRAM", watts: 165, length: 250 },
    ],
  },
  {
    id: "ram",
    name: "Memory (RAM)",
    icon: "▤",
    options: [
      { id: "ram1", name: "16GB DDR5 5600MHz", price: 4499, specs: "2 × 8GB · DDR5", memory: "DDR5" },
      { id: "ram2", name: "32GB DDR5 6000MHz", price: 7999, specs: "2 × 16GB · DDR5", memory: "DDR5" },
    ],
  },
  {
    id: "storage",
    name: "Storage",
    icon: "▣",
    options: [
      { id: "ssd1", name: "1TB NVMe SSD", price: 5999, specs: "PCIe Gen 4" },
      { id: "ssd2", name: "2TB NVMe SSD", price: 9999, specs: "PCIe Gen 4" },
    ],
  },
  {
    id: "psu",
    name: "Power Supply",
    icon: "⚡",
    options: [
      { id: "psu1", name: "550W 80+ Bronze", price: 3999, specs: "550W", watts: 550 },
      { id: "psu2", name: "650W 80+ Gold", price: 6999, specs: "650W", watts: 650 },
      { id: "psu3", name: "750W 80+ Gold", price: 8999, specs: "750W", watts: 750 },
    ],
  },
  {
    id: "case",
    name: "PC Cabinet",
    icon: "▥",
    options: [
      { id: "case1", name: "Mid Tower Airflow Case", price: 4999, specs: "ATX · GPU up to 320mm", form: "ATX", length: 320 },
      { id: "case2", name: "Compact Gaming Case", price: 3999, specs: "mATX · GPU up to 270mm", form: "mATX", length: 270 },
    ],
  },
  {
    id: "cooler",
    name: "CPU Cooler",
    icon: "❄",
    options: [
      { id: "cool1", name: "Air CPU Cooler", price: 1999, specs: "Air cooling" },
      { id: "cool2", name: "240mm Liquid Cooler", price: 5999, specs: "240mm AIO" },
    ],
  },
];

const initialBuild = {
  cpu: "cpu1",
  motherboard: "mb1",
  gpu: "gpu1",
  ram: "ram2",
  storage: "ssd1",
  psu: "psu2",
  case: "case1",
  cooler: "cool1",
};

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

export default function PcBuilderPage() {
  const [build, setBuild] = useState(initialBuild);
  const [budget, setBudget] = useState("100000");
  const [notice, setNotice] = useState("");

  const selected = useMemo(() => {
    return categories.map((category) => ({
      ...category,
      product:
        category.options.find((item) => item.id === build[category.id]) ||
        null,
    }));
  }, [build]);

  const total = selected.reduce(
    (sum, item) => sum + (item.product?.price || 0),
    0
  );

  const cpu = selected.find((item) => item.id === "cpu")?.product;
  const motherboard = selected.find((item) => item.id === "motherboard")?.product;
  const ram = selected.find((item) => item.id === "ram")?.product;
  const gpu = selected.find((item) => item.id === "gpu")?.product;
  const psu = selected.find((item) => item.id === "psu")?.product;
  const pcCase = selected.find((item) => item.id === "case")?.product;

  const estimatedWatts = 100 + (cpu?.watts || 65) + (gpu?.watts || 150);

  const issues = [];

  if (cpu && motherboard && cpu.socket !== motherboard.socket) {
    issues.push("Processor aur motherboard socket match nahi karte.");
  }

  if (ram && motherboard && ram.memory !== motherboard.memory) {
    issues.push("RAM aur motherboard memory type match nahi karte.");
  }

  if (
    motherboard &&
    pcCase &&
    motherboard.form === "ATX" &&
    pcCase.form !== "ATX"
  ) {
    issues.push("ATX motherboard selected cabinet mein fit nahi ho sakta.");
  }

  if (gpu && pcCase && gpu.length > pcCase.length) {
    issues.push("Graphics card cabinet ke listed GPU clearance se bada hai.");
  }

  if (psu && psu.watts < estimatedWatts * 1.25) {
    issues.push("Estimated power ke liye higher-wattage PSU consider karo.");
  }
  const bookThisPC=()=>{
    const bookingData = {
    orderType: "custom-pc",
    components: selected.map((item) => ({
      category: item.name,
      productId: item.product?.id || null,
      productName: item.product?.name || "Not selected",
      price: item.product?.price || 0,
      specs: item.product?.specs || "",
    })),
    totalAmount: total,
    budget: Number(budget) || 0,
    estimatedWatts,
    compatibilityIssues: issues,
    createdAt: new Date().toISOString(),
  };

  console.log("CYBERFLIX PC BOOKING DATA:", bookingData);
  }
  function updatePart(categoryId, productId) {
    setBuild((previous) => ({
      ...previous,
      [categoryId]: productId,
    }));
    setNotice("");
  }

  function resetBuild() {
    setBuild(initialBuild);
    setNotice("Build reset.");
  }

  async function copyBuild() {
    const summary = [
      "CYBERFLIX PC BUILD",
      ...selected.map((item) =>
        `${item.name}: ${item.product?.name || "Not selected"}`
      ),
      `Total: ${formatPrice(total)}`,
      `Estimated power: ${estimatedWatts}W`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(summary);
      setNotice("Build summary copied!");
    } catch {
      setNotice("Copy failed..");
    }
  }

  return (
    <main className="min-h-screen bg-[#05080B] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-10 mt-20 flex flex-col justify-between gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-center">
          <div>
            <Link
              href="/"
              className="text-sm font-bold tracking-[0.25em] text-[#3ABAE9]"
            >
              CYBERFLIX SYSTEMS
            </Link>

            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              BUILD YOUR <span className="text-[#3ABAE9]">PC.</span>
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
              Choose your components, check basic compatibility and plan your
              next gaming or workstation build.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={resetBuild}
              className="rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold transition hover:border-[#3ABAE9] hover:text-[#3ABAE9]"
            >
              Reset Build
            </button>

            <Link
              href="/Products"
              className="rounded-xl bg-[#3ABAE9] px-4 py-3 text-sm font-bold text-[#05080B] transition hover:bg-white"
            >
              Shop Products ↗
            </Link>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          {/* Component selection */}
          <section className="space-y-4">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold">Select Components</h2>
              <span className="text-sm text-gray-500">
                {selected.filter((item) => item.product).length}/8 selected
              </span>
            </div>

            {selected.map((category, index) => (
              <article
                key={category.id}
                className="rounded-2xl border border-white/10 bg-[#0A1117] p-4 transition hover:border-[#3ABAE9]/40 sm:p-5"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex min-w-0 flex-1 items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#3ABAE9]/20 bg-[#3ABAE9]/10 text-xl text-[#3ABAE9]">
                      {category.icon}
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-widest text-gray-500">
                        Component {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1 font-bold">{category.name}</h3>
                      <p className="mt-1 truncate text-sm text-gray-400">
                        {category.product?.name || "No component selected"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 sm:w-[260px]">
                    <span className="font-bold text-[#3ABAE9]">
                      {category.product
                        ? formatPrice(category.product.price)
                        : "—"}
                    </span>

                    <select
                      aria-label={`Select ${category.name}`}
                      value={build[category.id] || ""}
                      onChange={(event) =>
                        updatePart(category.id, event.target.value)
                      }
                      className="w-36 rounded-xl border border-white/10 bg-[#05080B] px-3 py-3 text-sm text-white outline-none focus:border-[#3ABAE9] sm:w-40"
                    >
                      <option value="">Not selected</option>
                      {category.options.map((product) => (
                        <option key={product.id} value={product.id}>
                          {product.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {category.product && (
                  <div className="mt-4 border-t border-white/5 pt-3 text-xs text-gray-500">
                    {category.product.specs}
                  </div>
                )}
              </article>
            ))}
          </section>

          
          <aside className="h-fit space-y-5 lg:sticky lg:top-6">
            <div className="rounded-2xl border border-[#3ABAE9]/30 bg-[#0A1117] p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                Your Configuration
              </p>

              <p className="mt-4 text-sm text-gray-400">Estimated total</p>
              <p className="mt-1 break-words text-3xl font-black text-[#3ABAE9] sm:text-4xl">
                {formatPrice(total)}
              </p>

              <div className="mt-6">
                <div className="mb-2 flex justify-between text-sm">
                  <label htmlFor="budget" className="text-gray-400">
                    Your budget
                  </label>
                  <span>{formatPrice(Number(budget) || 0)}</span>
                </div>

                <input
                  id="budget"
                  type="number"
                  min="0"
                  value={budget}
                  onChange={(event) => setBudget(event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#05080B] px-4 py-3 outline-none focus:border-[#3ABAE9]"
                  placeholder="Enter budget in ₹"
                />

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[#3ABAE9] transition-all"
                    style={{
                      width: `${Math.min(
                        100,
                        Math.max(
                          0,
                          (total / Math.max(Number(budget) || 1, 1)) * 100
                        )
                      )}%`,
                    }}
                  />
                </div>

                {Number(budget) > 0 && (
                  <p
                    className={`mt-2 text-xs ${
                      total > Number(budget)
                        ? "text-red-400"
                        : "text-green-400"
                    }`}
                  >
                    {total > Number(budget)
                      ? `${formatPrice(total - Number(budget))} over budget`
                      : `${formatPrice(Number(budget) - total)} remaining`}
                  </p>
                )}
              </div>

              <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                <div className="flex justify-between gap-3 text-sm">
                  <span className="text-gray-400">Components selected</span>
                  <span>
                    {selected.filter((item) => item.product).length}/8
                  </span>
                </div>
                <div className="flex justify-between gap-3 text-sm">
                  <span className="text-gray-400">Estimated system power</span>
                  <span>{estimatedWatts}W</span>
                </div>
              </div>

              <button
                onClick={copyBuild}
                className="mt-6 w-full rounded-xl bg-[#3ABAE9] px-4 py-3.5 font-bold text-[#05080B] transition hover:bg-white"
              >
                Copy Build Summary
              </button>
              <button
  type="button"
  onClick={bookThisPC}
  className="mt-3 w-full rounded-xl border border-[#3ABAE9] bg-[#3ABAE9]/10 px-4 py-3.5 font-bold text-[#3ABAE9] transition hover:bg-[#3ABAE9] hover:text-[#05080B]"
>
  Book This PC →
</button>

              <Link
                href="/contactus"
                className="mt-3 block w-full rounded-xl border border-white/15 px-4 py-3.5 text-center text-sm font-semibold transition hover:border-[#3ABAE9] hover:text-[#3ABAE9]"
              >
                Need Help With Your Build?
              </Link>

              {notice && (
                <p role="status" className="mt-4 text-center text-sm text-[#3ABAE9]">
                  {notice}
                </p>
              )}
            </div>

            <div
              className={`rounded-2xl border p-5 ${
                issues.length
                  ? "border-amber-400/30 bg-amber-400/5"
                  : "border-green-400/20 bg-green-400/5"
              }`}
            >
              <h3 className="font-bold">
                {issues.length
                  ? "⚠ Compatibility Review"
                  : "✓ Basic Compatibility"}
              </h3>

              {issues.length ? (
                <ul className="mt-3 space-y-2 text-sm leading-5 text-gray-300">
                  {issues.map((issue) => (
                    <li key={issue}>• {issue}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  No issues detected by these basic checks. Verify the exact
                  model specifications before purchasing.
                </p>
              )}
            </div>

            <p className="text-xs leading-5 text-gray-500">
              Demo catalogue and indicative prices only. This builder does not
              check live stock, actual store prices, BIOS support, cooler
              clearance or every hardware compatibility detail.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}