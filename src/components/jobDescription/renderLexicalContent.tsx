// // "use client";
// // import { createEditor } from "lexical";
// // import { $generateHtmlFromNodes } from "@lexical/html";
// // import React, { useEffect, useState } from "react";



// // export const RenderLexicalContent = ({ json }: { json: string }) => {
// //   const [html, setHtml] = useState<string>("");

// //   useEffect(() => {
// //     try {
// //       const editor = createEditor();
// //       const editorState = editor.parseEditorState(json);

// //       editorState.read(() => {
// //         setHtml($generateHtmlFromNodes(editor, null));
// //       });
// //     } catch (error) {
// //       console.error("Failed to render Lexical content:", error);
// //       setHtml("<p>Error loading content.</p>");
// //     }
// //   }, [json]);

// //   return <div dangerouslySetInnerHTML={{ __html: html }} />;
// // };

// "use client";
// import { createEditor } from "lexical";
// import { $generateHtmlFromNodes } from "@lexical/html";
// import { useEffect, useState, useMemo } from "react";
// import { HeadingNode } from "@lexical/rich-text";
// import { ListNode, ListItemNode } from "@lexical/list";
// import { ParagraphNode, TextNode } from "lexical";
// import React from "react";

// export const RenderLexicalContent = ({ json }: { json: string }) => {
//   const [html, setHtml] = useState<string>("");

//   // Memoize the editor to prevent recreation on every render
//   const editor = useMemo(
//     () =>
//       createEditor({
//         nodes: [HeadingNode, ListNode, ListItemNode, ParagraphNode, TextNode],
//       }),
//     []
//   );

//   useEffect(() => {
//     try {
//       let parsedJSON = JSON.parse(json);

//       // 🔹 Ensure indent values are correctly set
//       function fixIndent(node: any) {
//         if (node.type === "listitem" && typeof node.indent !== "number") {
//           node.indent = 0;
//         }
//         if (node.children) {
//           node.children.forEach(fixIndent);
//         }
//       }

//       if (parsedJSON.root?.children) {
//         parsedJSON.root.children.forEach(fixIndent);
//       }

//       // 🔹 Ensure JSON contains `version`
//       if (!parsedJSON.version) {
//         parsedJSON.version = 1;
//       }

//       editor.update(() => {
//         const editorState = editor.parseEditorState(JSON.stringify(parsedJSON));
//         editor.setEditorState(editorState);
//       });

//       // Ensure the editor state has fully updated before reading
//       setTimeout(() => {
//         editor.getEditorState().read(() => {
//           setHtml($generateHtmlFromNodes(editor, null));
//         });
//       }, 10);
//     } catch (error) {
//       console.error("Failed to render Lexical content:", error);
//       setHtml("<p>Error loading content.</p>");
//     }
//   }, [json, editor]);

//   return <div dangerouslySetInnerHTML={{ __html: html }} />;
// };
