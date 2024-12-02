// 'use client'

// import React, { useState } from 'react'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
// import { Button } from "@/components/ui/button"
// import { Check, Copy } from "lucide-react"

// const pythonCode = `from asteroid import ApprovalManager, NetworkApprover, CommandApprover, BrowserApprover

// # Initialize the Approval Manager with various Approvers
// approval_manager = ApprovalManager([
//     NetworkApprover(),
//     CommandApprover(),
//     BrowserApprover(),
//     # Add more custom Approvers as needed
// ])

// completion = client.chat.completions.create(
//   model="gpt-4o",
//   messages=messages,
//   tools=tools,
//   tool_choice="auto"
// )

// # Request approval for the LLM response
// approval_result = approval_manager.request_approval(completion)`

// export default function CodeDisplay() {
//   const [isCopied, setIsCopied] = useState(false)

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(pythonCode)
//     setIsCopied(true)
//     setTimeout(() => setIsCopied(false), 2000)
//   }

//   return (
//     <div className="w-full max-w-3xl mx-auto p-4">
//       <div className="relative">
//         <SyntaxHighlighter
//           language="python"
//           style={vscDarkPlus}
//           customStyle={{
//             padding: '1.5rem',
//             borderRadius: '0.5rem',
//             fontSize: '0.875rem',
//             lineHeight: '1.5',
//           }}
//         >
//           {pythonCode}
//         </SyntaxHighlighter>
//         <Button
//           variant="outline"
//           size="icon"
//           className="absolute top-2 right-2"
//           onClick={copyToClipboard}
//         >
//           {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
//         </Button>
//       </div>
//     </div>
//   )
// }
