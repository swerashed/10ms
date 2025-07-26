import { useRichText } from "@/hooks/useRichText";


export default function RichTextRenderer({ html }: { html: string }) {
  const { renderRichText } = useRichText();
  console.log("html", html)
  return (
    <div className="prose">
      {renderRichText(html)}
    </div>
  );
}
