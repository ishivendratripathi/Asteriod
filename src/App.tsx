import React from 'react';

const NinetiesWebsite = () => {
  return (
    <div className="bg-white text-black font-serif p-8 max-w-4xl mx-auto">
      <header className="border-b-2 border-black pb-8 mb-12 mt-16 space-y-4">
        <h1 className="text-4xl font-bold">attractorstate.ai</h1>
        <p>Towards safe deployment of fully agentic sytems into the wild</p>
      </header>

      <main className="space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-4">Addressing the Challenges of Safe Agent Deployment</h2>
          <p className="mb-6">In the rapidly evolving field of artificial intelligence, the deployment of complex AI agents with web access and code execution abilities presents significant challenges. Ensuring safe and controlled operations has become a critical concern for research labs and AI developers worldwide.</p>
          <p className="mb-6">Current oversight technologies often fall short in detecting and blocking problematic behaviors, potentially hindering confident deployment in real-world scenarios. Our platform addresses the following key challenges:</p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>Limited real-time monitoring of AI agent actions</li>
            <li>Insufficient flexibility in approval mechanisms</li>
            <li>Inefficiencies in managing large-scale agent evaluations</li>
            <li>Lack of a standardized framework for implementing oversight across different AI systems</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Key Features of Our Platform</h2>
          <ol className="list-decimal pl-8 space-y-4">
            <li><strong>Pluggable Approvers:</strong> A flexible system of approval mechanisms customizable to specific AI applications, ranging from simple allow-list checks to complex AI-powered oversight models.</li>
            <li><strong>Approval Manager:</strong> Orchestrates multiple Approvers, handling escalations and logging decisions for a layered approach to oversight, combining automated checks with human intervention when necessary.</li>
            <li><strong>Granular Action Monitoring:</strong> Comprehensive monitoring of network requests, executed commands, and detailed actions in headless browsers, providing unparalleled visibility into AI agent behaviors.</li>
            <li><strong>Policy-Based Control:</strong> Define custom policies for automatic approval or blocking of agent actions based on predefined criteria, reducing the need for constant human supervision.</li>
            <li><strong>Human-in-the-Loop Interface:</strong> Efficient monitoring and intervention interface for human reviewers, supporting both CLI and web-based interactions for maximum flexibility.</li>
            <li><strong>Scalable Architecture:</strong> Designed to handle multiple concurrent AI agents for efficient large-scale evaluations and deployments, future-proofing your research infrastructure.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Implementation Details</h2>
          <p className="mb-6">Our platform is developed with a focus on integration and scalability, particularly emphasizing compatibility with the Inspect AI framework used by the UK's AI Safety Institute. Key implementation details include:</p>
          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Approver System:</strong> Implements various Approver types, including AllowListApprover for predefined safe commands and HumanApprover for manual intervention.</li>
            <li><strong>Approval Manager:</strong> Manages Approver chains, handles decision-making and logging, and provides a central point for orchestrating the approval process.</li>
            <li><strong>Integration with Inspect AI:</strong> Initially implemented as external tools, with plans for deeper integration to create an Approval extension point within Inspect.</li>
            <li><strong>User Interface:</strong> Web-based or CLI interface using cutting-edge technologies like websockets or Textualize for responsive and efficient user interactions.</li>
            <li><strong>Scalability Enhancements:</strong> Designed to handle multiple concurrent Inspect instances, with websocket demultiplexing for efficient communication between multiple agents and a single review interface.</li>
            <li><strong>Future Developments:</strong> Plans for asynchronous operations, flexible approval modes, and an innovative "Action Runway" feature to reduce overhead for repetitive safe actions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Enhancing AI Safety in Research and Development</h2>
          <p className="mb-6">Our AI Agent Oversight Platform offers a comprehensive solution for research labs and AI developers seeking to enhance the safety and controllability of their AI agent deployments. By choosing our platform, you gain:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>Improved safety and controllability in AI agent deployments</li>
            <li>Support for complex AI applications with robust oversight</li>
            <li>Efficient management of large-scale evaluations</li>
            <li>A forward-looking solution adaptable to evolving AI technologies</li>
          </ul>
        </section>

        <section className="mt-16">
          <p className="text-center text-xl">
            <a href="#" className="text-blue-700 underline mr-8">Contact Our Team</a>
            <a href="#" className="text-blue-700 underline">Request a Demonstration</a>
          </p>
        </section>
      </main>

      <footer className="mt-16 pt-8 border-t-2 border-black text-center text-sm">
        <p>&copy; 2024 Attractor State. All rights reserved.</p>
        <p className="mt-2">///</p>
      </footer>
    </div>
  );
};

export default NinetiesWebsite;
