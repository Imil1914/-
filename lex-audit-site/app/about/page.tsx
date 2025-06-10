diff --git a//dev/null b/lex-audit-site/app/about/page.tsx
index 0000000000000000000000000000000000000000..6268f90b1d84eaf566bf21ee49b9d33798c3d23d 100644
--- a//dev/null
+++ b/lex-audit-site/app/about/page.tsx
@@ -0,0 +1,13 @@
+export const metadata = {
+  title: 'О компании — Лекс-Аудит',
+  description: 'История и ценности нашей аудиторской компании',
+};
+
+export default function About() {
+  return (
+    <div className="max-w-5xl mx-auto py-12 px-4">
+      <h1 className="text-3xl font-bold mb-4">О компании</h1>
+      <p className="mb-2">Компания «Лекс-Аудит» основана в 2004 году. Мы предоставляем профессиональные услуги аудита и бухгалтерского сопровождения.</p>
+    </div>
+  );
+}
