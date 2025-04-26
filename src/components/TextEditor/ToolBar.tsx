import React from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  COMMAND_PRIORITY_NORMAL,
  ParagraphNode,
} from 'lexical';
import { $wrapNodes } from '@lexical/selection';
import { $setBlocksType } from '@lexical/selection';
import { $isAtNodeEnd } from '@lexical/selection';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
} from '@lexical/list';
import { $isHeadingNode } from '@lexical/rich-text';
import { $isListNode, ListNode } from '@lexical/list';
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { $findMatchingParent } from '@lexical/utils';
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  List,
  ListOrdered,
  ListOrderedIcon,
  ListPlus,
  LucideListOrdered,
  X,
} from 'lucide-react';

const ToolbarPlugin: React.FC = () => {
  const [editor] = useLexicalComposerContext();
  const [activeStyles, setActiveStyles] = React.useState<Set<string>>(
    new Set(),
  );
  const [blockType, setBlockType] = React.useState<string>('paragraph');
  const [linkUrl, setLinkUrl] = React.useState<string>('');
  const [showLinkInput, setShowLinkInput] = React.useState<boolean>(false);

  // Update toolbar status based on current selection
  React.useEffect(() => {
    const updateToolbar = () => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        // Update text formatting
        const formatState = {
          bold: selection.hasFormat('bold'),
          italic: selection.hasFormat('italic'),
          underline: selection.hasFormat('underline'),
          strikethrough: selection.hasFormat('strikethrough'),
          subscript: selection.hasFormat('subscript'),
          superscript: selection.hasFormat('superscript'),
          code: selection.hasFormat('code'),
        };

        // Convert format state to Set for easier management
        const activeFormatSet = new Set<string>();
        Object.entries(formatState).forEach(([format, isActive]) => {
          if (isActive) {
            activeFormatSet.add(format);
          }
        });
        setActiveStyles(activeFormatSet);

        // Update block type (paragraph, heading, etc.)
        const anchorNode = selection.anchor.getNode();
        const element =
          anchorNode.getKey() === 'root'
            ? anchorNode
            : $findMatchingParent(anchorNode, (e) => {
                const parent = e.getParent();
                return parent !== null && parent.getKey() === 'root';
              });

        if (element) {
          if ($isHeadingNode(element)) {
            const tag = element.getTag();
            setBlockType(tag);
          } else if ($isListNode(element)) {
            const parentList = $findMatchingParent(anchorNode, $isListNode);
            const listType = parentList ? parentList.getListType() : null;
            setBlockType(listType === 'bullet' ? 'ul' : 'ol');
          } else {
            setBlockType('paragraph');
          }
        }

        // Check if selection has a link
        const node = getSelectedNode(selection);
        const parent = node.getParent();
        if ($isLinkNode(parent) || $isLinkNode(node)) {
          setBlockType('link');
        }
      }
    };

    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        updateToolbar();
      });
    });
  }, [editor]);

  // Helper to get the currently selected node
  const getSelectedNode = (selection: any) => {
    const anchor = selection.anchor;
    const focus = selection.focus;
    const anchorNode = selection.anchor.getNode();
    const focusNode = selection.focus.getNode();
    if (anchorNode === focusNode) {
      return anchorNode;
    }
    const isBackward = selection.isBackward();
    if (isBackward) {
      return $isAtNodeEnd(focus) ? anchorNode : focusNode;
    } else {
      return $isAtNodeEnd(anchor) ? focusNode : anchorNode;
    }
  };

  // Format handlers
  const toggleFormat = (format: string) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
  };

  const formatParagraph = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createParagraphNode());
      }
    });
  };

  const formatHeading = (level: 'h1' | 'h2' | 'h3') => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createHeadingNode(level));
      }
    });
  };

  const formatBulletList = () => {
    editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
  };

  const formatNumberedList = () => {
    editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
  };

  const formatQuote = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createQuoteNode());
      }
    });
  };

  const removeList = () => {
    editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
  };

  const toggleTextAlign = (
    alignment: 'left' | 'center' | 'right' | 'justify',
  ) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const nodes = selection.getNodes();
        nodes.forEach((node) => {
          const element = node.getParent();
          if (element) {
            element.setFormat(alignment);
          }
        });
      }
    });
  };

  const toggleLink = () => {
    if (!showLinkInput) {
      setShowLinkInput(true);
      return;
    }

    editor.dispatchCommand(TOGGLE_LINK_COMMAND, linkUrl);
    setShowLinkInput(false);
    setLinkUrl('');
  };

  // Helper functions to create nodes (would be defined by Lexical)
  const $createParagraphNode = () => {
    return new ParagraphNode();
  };

  const $createHeadingNode = (level: 'h1' | 'h2' | 'h3') => {
    return new HeadingNode(level);
  };

  const $createQuoteNode = () => {
    return new QuoteNode();
  };

  return (
    <div className="flex items-center p-2 border-b border-gray-200 mb-4 flex-wrap gap-1">
      {/* Text Formatting */}
      <div className="flex items-center">
        <button
          onClick={() => toggleFormat('bold')}
          className={`p-2 rounded hover:bg-gray-100 ${activeStyles.has('bold') ? 'bg-gray-200' : ''}`}
          aria-label="Format Bold"
        >
          <span className="font-bold">B</span>
        </button>
        <button
          onClick={() => toggleFormat('italic')}
          className={`p-2 rounded hover:bg-gray-100 ${activeStyles.has('italic') ? 'bg-gray-200' : ''}`}
          aria-label="Format Italic"
        >
          <span className="italic">I</span>
        </button>
        <button
          onClick={() => toggleFormat('underline')}
          className={`p-2 rounded hover:bg-gray-100 ${activeStyles.has('underline') ? 'bg-gray-200' : ''}`}
          aria-label="Format Underline"
        >
          <span className="underline">U</span>
        </button>
        <button
          onClick={() => toggleFormat('strikethrough')}
          className={`p-2 rounded hover:bg-gray-100 ${activeStyles.has('strikethrough') ? 'bg-gray-200' : ''}`}
          aria-label="Format Strikethrough"
        >
          <span className="line-through">S</span>
        </button>
        <button
          onClick={() => toggleFormat('code')}
          className={`p-2 rounded hover:bg-gray-100 ${activeStyles.has('code') ? 'bg-gray-200' : ''}`}
          aria-label="Format Code"
        >
          <span className="font-mono">{'<>'}</span>
        </button>
      </div>

      <div className="border-l border-gray-300 h-6"></div>

      {/* Block Type */}
      <div className="flex items-center mr-2">
        <button
          onClick={formatParagraph}
          className={`p-2 rounded hover:bg-gray-100 ${blockType === 'paragraph' ? 'bg-gray-200' : ''}`}
          aria-label="Format Paragraph"
        >
          <span className="text-sm">P</span>
        </button>
        <button
          onClick={() => formatHeading('h1')}
          className={`p-2 rounded hover:bg-gray-100 ${blockType === 'h1' ? 'bg-gray-200' : ''}`}
          aria-label="Format H1"
        >
          <span className="text-lg font-bold">H1</span>
        </button>
        <button
          onClick={() => formatHeading('h2')}
          className={`p-2 rounded hover:bg-gray-100 ${blockType === 'h2' ? 'bg-gray-200' : ''}`}
          aria-label="Format H2"
        >
          <span className="text-base font-bold">H2</span>
        </button>
        <button
          onClick={() => formatHeading('h3')}
          className={`p-2 rounded hover:bg-gray-100 ${blockType === 'h3' ? 'bg-gray-200' : ''}`}
          aria-label="Format H3"
        >
          <span className="text-sm font-bold">H3</span>
        </button>
        <button
          onClick={formatQuote}
          className={`p-2 rounded hover:bg-gray-100 ${blockType === 'quote' ? 'bg-gray-200' : ''}`}
          aria-label="Format Quote"
        >
          <span className="text-xl">"</span>
        </button>
      </div>

      <div className="border-l border-gray-300 h-6"></div>

      {/* Lists */}
      <div className="flex items-center">
        <button
          onClick={formatBulletList}
          className={`p-2 rounded hover:bg-gray-100 ${blockType === 'ul' ? 'bg-gray-200' : ''}`}
          aria-label="Bullet List"
        >
          <span className="text-lg">
            <List />{' '}
          </span>
        </button>
        <button
          onClick={formatNumberedList}
          className={`p-2 rounded hover:bg-gray-100 ${blockType === 'ol' ? 'bg-gray-200' : ''}`}
          aria-label="Numbered List"
        >
          <span className="text-sm">
            <ListOrdered />
          </span>
        </button>
        <button
          onClick={removeList}
          className="p-2 rounded hover:bg-gray-100"
          aria-label="Remove List"
        >
          <span className="text-sm">
            <X />
          </span>
        </button>
      </div>

      <div className="border-l border-gray-300 h-6 mx-2"></div>

      {/* Alignment */}
      <div className="flex items-center mr-2">
        <button
          onClick={() => toggleTextAlign('left')}
          className="p-2 rounded hover:bg-gray-100"
          aria-label="Align Left"
        >
          <span className="text-sm">
            <AlignLeft />
          </span>
        </button>
        <button
          onClick={() => toggleTextAlign('center')}
          className="p-2 rounded hover:bg-gray-100"
          aria-label="Align Center"
        >
          <span className="text-sm">
            <AlignCenter />{' '}
          </span>
        </button>
        <button
          onClick={() => toggleTextAlign('right')}
          className="p-2 rounded hover:bg-gray-100"
          aria-label="Align Right"
        >
          <span className="text-sm">
            <AlignRight />
          </span>
        </button>
        <button
          onClick={() => toggleTextAlign('justify')}
          className="p-2 rounded hover:bg-gray-100"
          aria-label="Justify Text"
        >
          <span className="text-sm">
            <AlignJustify />{' '}
          </span>
        </button>
      </div>

      <div className="border-l border-gray-300 h-6 mx-2"></div>

      {/* Link */}
      <div className="flex items-center">
        <button
          onClick={toggleLink}
          className={`p-2 rounded hover:bg-gray-100 ${blockType === 'link' ? 'bg-gray-200' : ''}`}
          aria-label="Insert Link"
        >
          <span className="text-blue-500 underline">🔗</span>
        </button>
        {showLinkInput && (
          <div className="flex items-center ml-2">
            <input
              type="text"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="Enter URL"
              className="border border-gray-300 rounded px-2 py-1 text-sm w-64"
            />
            <button
              onClick={toggleLink}
              className="ml-2 px-2 py-1 bg-green-500 text-white rounded text-sm"
            >
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolbarPlugin;
