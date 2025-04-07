// Important: Import domToReact
import parse, { HTMLReactParserOptions, Element, domToReact } from 'html-react-parser';
import { ReactNode } from 'react';

export const useRichText = () => {
  const renderRichText = (htmlString: string): ReactNode => {
    // The options object needs to be accessible inside the replace function
    // so it can be passed down recursively.
    const options: HTMLReactParserOptions = {
      replace: (domNode) => {
        if (domNode instanceof Element && domNode.attribs) {
          // Handle <a> tags
          if (domNode.name === 'a') {
            const href = domNode.attribs.href;
            return (
              <a
                href={href}
                className="text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* CORRECT: Let the parser handle the children */}
                {domToReact(domNode.children, options)}
              </a>
            );
          }

          // Handle <h2> tags
          if (domNode.name === 'h2') {
            return (
              <h2 className="text-xl text-dark font-bold my-2">
                {/* CORRECT: Let the parser handle the children */}
                {domToReact(domNode.children, options)}
              </h2>
            );
          }
          
          // Handle <p> tags (Corrected from h2 to p)
          if (domNode.name === 'p') {
            return (
              <p className="text-base text-inherit my-2">
                {/* CORRECT: Let the parser handle the children */}
                {domToReact(domNode.children, options)}
              </p>
            );
          }

          // Handle <li> tags
          if (domNode.name === 'li') {
            return (
              <li className="list-disc text-dark ml-6 mb-1">
                {/* CORRECT: Let the parser handle the children */}
                {domToReact(domNode.children, options)}
              </li>
            );
          }

          // You could also add handlers for <ul>, <ol>, <strong>, etc.
          // If a tag is not handled here, the parser will render it with its default behavior.
        }
      },
    };

    return parse(htmlString, options);
  };

  return { renderRichText };
};