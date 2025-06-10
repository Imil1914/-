diff --git a//dev/null b/lex-audit-site/app/api/contact/route.ts
index 0000000000000000000000000000000000000000..1d5b89ca6251967fc67c0ffa4a4302f41ece7657 100644
--- a//dev/null
+++ b/lex-audit-site/app/api/contact/route.ts
@@ -0,0 +1,11 @@
+import { NextRequest, NextResponse } from 'next/server';
+
+export async function POST(req: NextRequest) {
+  const data = await req.formData();
+  const name = data.get('name');
+  const email = data.get('email');
+  const message = data.get('message');
+  console.log('Contact request:', { name, email, message });
+  // Здесь можно реализовать отправку письма через SMTP
+  return NextResponse.json({ success: true });
+}
