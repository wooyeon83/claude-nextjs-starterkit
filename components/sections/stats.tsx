const stats = [
  { label: "타입 안전성", value: "100%" },
  { label: "Lighthouse 점수", value: "98+" },
  { label: "첫 페이지 로드", value: "<1s" },
  { label: "내장 컴포넌트", value: "10+" },
];

export function Stats() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-semibold text-foreground md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
