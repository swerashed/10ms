import parse, { HTMLReactParserOptions, Element, domToReact } from 'html-react-parser';
import { ReactNode } from 'react';

export const useRichText = () => {
  const renderRichText = (htmlString: string): ReactNode => {
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
                {domToReact(domNode.children as any[], options)}
              </a>
            );
          }

          // Handle <h2> tags
          if (domNode.name === 'h2') {
            return (
              <h2 className="text-xl text-dark font-bold my-2">
                {domToReact(domNode.children as any[], options)}
              </h2>
            );
          }
          
          // Handle <p> tags (Corrected from h2 to p)
          if (domNode.name === 'p') {
            return (
              <p className="text-base text-inherit my-2">
                {domToReact(domNode.children as any[], options)}
              </p>
            );
          }

          // Handle <li> tags
          if (domNode.name === 'li') {
            return (
              <li className="list-disc text-dark ml-6 mb-1">
                {domToReact(domNode.children as any[], options)}
              </li>
            );
          }

        }
      },
    };

    return parse(htmlString, options);
  };

  return { renderRichText };
};