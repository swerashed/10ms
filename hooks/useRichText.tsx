import parse, { HTMLReactParserOptions, Element, Text } from 'html-react-parser';
import { ReactNode } from 'react';

export const useRichText = () => {
  const renderRichText = (htmlString: string): ReactNode => {
    const options: HTMLReactParserOptions = {
      replace: (domNode) => {
        if (domNode instanceof Element) {
          const firstChild = domNode.children[0];

          // Extract text content safely
          const childText =
            firstChild && firstChild.type === 'text'
              ? (firstChild as Text).data
              : null;

          // Handle <a> tags (custom link component)
          if (domNode.name === 'a') {
            const href = domNode.attribs.href;
            return (
              <a
                href={href}
                className="text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                {childText}
              </a>
            );
          }

          // Handle <h2> tags
          if (domNode.name === 'h2') {
            return (
              <h2 className="text-xl text-dark font-bold my-2">
                {childText}
              </h2>
            );
          }
          // Handle <p> tags
          if (domNode.name === 'p') {
            return (
              <h2 className="text-base text-dark my-2">
                {childText}
              </h2>
            );
          }

          // Handle <li> tags
          if (domNode.name === 'li') {
            return (
              <li className="list-disc text-dark ml-6 mb-1">
                {childText}
              </li>
            );
          }

          // we ca add more tag handlers of needed
        }
      },
    };

    return parse(htmlString, options);
  };

  return { renderRichText };
};
