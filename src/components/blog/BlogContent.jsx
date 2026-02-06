export default function BlogContent({ content }) {
  return (
    <div className="max-w-none">
      {content.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index} className="text-[#5a6a7a] leading-relaxed mb-6 font-sans">
                {block.text}
              </p>
            );
          case "heading":
            return (
              <h2 key={index} className="text-2xl font-semibold text-[#1a1a1a] mt-10 mb-4">
                {block.text}
              </h2>
            );
          case "list":
            return (
              <ul key={index} className="list-disc pl-6 mb-6 space-y-2 text-[#5a6a7a] font-sans">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote key={index} className="border-l-4 border-[#8ab4d5] pl-6 py-2 my-8 italic text-[#5a6a7a] font-sans">
                <p>"{block.text}"</p>
                {block.attribution && (
                  <cite className="block mt-2 text-sm not-italic font-medium text-[#1a1a1a]">
                    — {block.attribution}
                  </cite>
                )}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
