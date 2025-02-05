import { useRichText } from "@/hooks/useRichText";


export default function RichTextRenderer({ html }: { html: string }) {
  const { renderRichText } = useRichText();

  return (
    <div className="prose">
      {renderRichText(html)}
    </div>
  );
}
