// import React from 'react';
// import { LexicalComposer } from '@lexical/react/LexicalComposer';
// import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
// import { ContentEditable } from '@lexical/react/LexicalContentEditable';
// import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
// import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
// import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
// import { HeadingNode, QuoteNode } from '@lexical/rich-text';
// import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
// import { ListItemNode, ListNode } from '@lexical/list';
// import { CodeHighlightNode, CodeNode } from '@lexical/code';
// import { AutoLinkNode, LinkNode } from '@lexical/link';
// import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
// import { ListPlugin } from '@lexical/react/LexicalListPlugin';
// import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
// import { TRANSFORMERS } from '@lexical/markdown';
// import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
// import { $getSelection, $isRangeSelection } from 'lexical';

// // Lexical theme using Tailwind classes
// const theme = {
//   ltr: 'text-left',
//   rtl: 'text-right',
//   placeholder: 'text-gray-400',
//   paragraph: 'mb-2',
//   heading: {
//     h1: 'text-3xl font-bold mb-4',
//     h2: 'text-2xl font-bold mb-3',
//     h3: 'text-xl font-bold mb-2',
//   },
//   list: {
//     ol: 'list-decimal pl-5 mb-2',
//     ul: 'list-disc pl-5 mb-2',
//   },
//   quote: 'border-l-4 border-gray-300 pl-4 italic my-4',
//   link: 'text-blue-500 underline',
//   text: {
//     bold: 'font-bold',
//     italic: 'italic',
//     underline: 'underline',
//     code: 'bg-gray-100 p-1 rounded font-mono text-sm',
//   },
// };

// // Custom toolbar plugin using Tailwind
// const ToolbarPlugin: React.FC = () => {
//   const [editor] = useLexicalComposerContext();
  
//   const formatBold = () => {
//     editor.update(() => {
//       const selection = $getSelection();
//       if ($isRangeSelection(selection)) {
//         selection.formatText('bold');
//       }
//     });
//   };
  
//   const formatItalic = () => {
//     editor.update(() => {
//       const selection = $getSelection();
//       if ($isRangeSelection(selection)) {
//         selection.formatText('italic');
//       }
//     });
//   };

//   const formatUnderline = () => {
//     editor.update(() => {
//       const selection = $getSelection();
//       if ($isRangeSelection(selection)) {
//         selection.formatText('underline');
//       }
//     });
//   };

//   const formatHeading = (level: 'h1' | 'h2' | 'h3') => {
//     editor.update(() => {
//       const selection = $getSelection();
//       if ($isRangeSelection(selection)) {
//         // This is simplified - actual heading implementation would be more complex
//         console.log(`Format heading ${level}`);
//       }
//     });
//   };
  
//   return (
//     <div className="flex items-center p-2 border-b border-gray-200 mb-4 flex-wrap">
//       <button 
//         onClick={formatBold}
//         className="p-2 rounded hover:bg-gray-100 mr-1 font-bold"
//         aria-label="Format Bold"
//       >
//         B
//       </button>
//       <button 
//         onClick={formatItalic}
//         className="p-2 rounded hover:bg-gray-100 mr-1 italic"
//         aria-label="Format Italic"
//       >
//         I
//       </button>
//       <button 
//         onClick={formatUnderline}
//         className="p-2 rounded hover:bg-gray-100 mr-1 underline"
//         aria-label="Format Underline"
//       >
//         U
//       </button>
//       <div className="border-l border-gray-300 h-6 mx-2"></div>
//       <button 
//         onClick={() => formatHeading('h1')}
//         className="p-2 rounded hover:bg-gray-100 mr-1 text-base font-semibold"
//         aria-label="Heading 1"
//       >
//         H1
//       </button>
//       <button 
//         onClick={() => formatHeading('h2')}
//         className="p-2 rounded hover:bg-gray-100 mr-1 text-base font-semibold"
//         aria-label="Heading 2"
//       >
//         H2
//       </button>
//       <button 
//         onClick={() => formatHeading('h3')}
//         className="p-2 rounded hover:bg-gray-100 mr-1 text-base font-semibold"
//         aria-label="Heading 3"
//       >
//         H3
//       </button>
//     </div>
//   );
// };

// // Custom content editable component with Tailwind styling
// const CustomContentEditable: React.FC = () => {
//   return (
//     <ContentEditable 
//       className="outline-none min-h-64 px-4 py-2 prose prose-sm sm:prose lg:prose-lg focus:ring-0"
//     />
//   );
// };

// // Custom placeholder component with Tailwind styling
// const Placeholder: React.FC<{text: string}> = ({text}) => {
//   return (
//     <div className="text-gray-400 absolute top-14 left-4 pointer-events-none">
//       {text}
//     </div>
//   );
// };

// // Lexical editor configuration
// const editorConfig = {
//   namespace: 'LexicalEditor',
//   theme,
//   onError: (error: Error) => {
//     console.error(error);
//   },
//   nodes: [
//     HeadingNode,
//     QuoteNode,
//     ListItemNode,
//     ListNode,
//     CodeNode,
//     CodeHighlightNode,
//     TableNode,
//     TableCellNode,
//     TableRowNode,
//     AutoLinkNode,
//     LinkNode
//   ]
// };

// interface TextEditorProps {
//   initialContent?: string;
//   placeholder?: string;
//   onChange?: (editorState: string) => void;
//   className?: string;
// }

// const TextEditor: React.FC<TextEditorProps> = ({ 
//   initialContent = '',
//   placeholder = 'Start typing...',
//   onChange,
//   className = ''
// }) => {
//   return (
//     <div className={`border border-gray-300 rounded-lg shadow-sm bg-white ${className}`}>
//       <LexicalComposer initialConfig={editorConfig}>
//         <div>
//           <ToolbarPlugin />
//           <div className="relative">
//             <RichTextPlugin
//               contentEditable={<CustomContentEditable />}
//               placeholder={<Placeholder text={placeholder} />}
//               ErrorBoundary={LexicalErrorBoundary}
//             />
//             <HistoryPlugin />
//             <AutoFocusPlugin />
//             <ListPlugin />
//             <LinkPlugin />
//             <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
//           </div>
//         </div>
//       </LexicalComposer>
//     </div>
//   );
// };

// export default TextEditor;

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { InitialEditorStateType, LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { TRANSFORMERS } from '@lexical/markdown';

import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
// Import the toolbar from its separate file
import ToolbarPlugin from './ToolBar';
import { EditorState, LexicalEditor } from 'lexical';

// Custom Error Boundary component that matches the expected type
class CustomErrorBoundary extends Component<{children: ReactNode}, {error: Error | null}> {
  constructor(props: {children: ReactNode}) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Lexical Editor error:', error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="p-4 text-red-500 border border-red-300 rounded bg-red-50">
          <h2 className="text-lg font-bold mb-2">Something went wrong</h2>
          <p className="mb-2">The editor encountered an error:</p>
          <pre className="p-2 bg-red-100 rounded overflow-auto text-sm">
            {this.state.error.message}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

// Lexical theme using Tailwind classes
const theme = {
  ltr: 'text-left',
  rtl: 'text-right',
  placeholder: 'text-gray-400',
  paragraph: 'mb-2',
  heading: {
    h1: 'text-3xl font-bold mb-4',
    h2: 'text-2xl font-bold mb-3',
    h3: 'text-xl font-bold mb-2',
  },
  list: {
    ol: 'list-decimal pl-5 mb-2',
    ul: 'list-disc pl-5 mb-2',
  },
  quote: 'border-l-4 border-gray-300 pl-4 italic my-4',
  link: 'text-blue-500 underline',
  text: {
    bold: 'font-bold',
    italic: 'italic',
    underline: 'underline',
    strikethrough: 'line-through',
    subscript: 'text-xs align-sub',
    superscript: 'text-xs align-super',
    code: 'bg-gray-100 p-1 rounded font-mono text-sm',
  },
  // Added text alignment styles
  alignment: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  },
};

// Custom content editable component with Tailwind styling
const CustomContentEditable: React.FC = () => {
  return (
    <ContentEditable 
      className="outline-none min-h-64 px-4 py-2 prose prose-sm sm:prose lg:prose-lg focus:ring-0"
    />
  );
};

// Custom placeholder component with Tailwind styling
const Placeholder: React.FC<{text: string}> = ({text}) => {
  return (
    <div className="text-gray-400 absolute top-2 left-4 pointer-events-none">
      {text}
    </div>
  );
};


interface TextEditorProps {
  initialContent?: string;
  placeholder?: string;
  onChange?: (editorState: string) => void;
  className?: string;
}

const TextEditor: React.FC<TextEditorProps> = ({ 
  initialContent,
  placeholder = 'Start typing...',
  onChange,
  className = ''
}) => {

  // const initialEditorState = initialContent
  //   ? (editor) => {
  //       const editorState = editor.parseEditorState(initialContent);
  //       return editorState;
  //     }
  //   : undefined;
  // Lexical editor configuration
const editorConfig = {
  namespace: 'LexicalEditor',
  theme,
  onError: (error: Error) => {
    console.error('Lexical error:', error);
  },
  editorState: (editor: LexicalEditor) => {
    return initialContent 
      ? editor.parseEditorState(initialContent)
      : null; // Default to null so Lexical handles empty state
  },
  nodes: [
    HeadingNode,
    QuoteNode,
    ListItemNode,
    ListNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode
  ]
};

    // Function to handle content change
    const handleChange = (editorState: EditorState) => {
      editorState.read(() => {
        const contentJSON = JSON.stringify(editorState.toJSON());
        if (onChange) {
          onChange(contentJSON);
        }
      });
    };

  return (
    <div className={`border border-gray-300 rounded-lg shadow-sm bg-white ${className}`}>
      <LexicalComposer initialConfig={editorConfig}>
        <div>
          <ToolbarPlugin />
          <div className="relative">
            <RichTextPlugin
              placeholder={<Placeholder text={placeholder} />}
              contentEditable={<CustomContentEditable />}
              
              ErrorBoundary={CustomErrorBoundary}
            />
            <HistoryPlugin />
            <OnChangePlugin onChange={handleChange} />
            <AutoFocusPlugin />
            <ListPlugin />
            <LinkPlugin />
            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          </div>
        </div>
      </LexicalComposer>
    </div>
  );
};

export default TextEditor;