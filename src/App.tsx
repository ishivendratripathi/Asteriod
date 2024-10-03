import React from 'react';

const NinetiesWebsite = () => {
  const name = 'Entropy Labs';
  return (
    <div className="bg-white text-black font-serif p-8 max-w-4xl mx-auto space-y-6">
      <header className="border-b-2 border-black pb-8 mb-12 mt-16 space-y-4">
        <h1 className="text-5xl font-bold tracking-">{name}</h1>
        <p>Towards Scalable Oversight</p>
      </header>




      <main className="space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-4">Advanced agent oversight</h2>
          <p>
            Entropy Labs is building the infrastructure to enable Scalable Oversight, making large scale agent clusters safer and more efficient using both automated and human review of agent actions.
          </p>
          <br />
          <p>
            When running thousands of agents with internet access and code execution on high risk tasks, we're providing granular observability into the actions of agents and their operating environments.
          </p>
          <br />
          <p>
            We're building a suite of "approvers" to automate the detection, blocking and approval of actions. These approvers monitor network requests, executed commands and actions taken in headless browsers, and can intelligently approve or block agent actions and escalate to human.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">The challenge</h2>
          <p className="mb-6">Increasingly capable agentic AI systems with web access and code execution abilities present significant challenges. Ensuring safe and controlled operations has become a critical concern for research labs and enterprises trying to deploy agents into the wild to solve useful tasks.</p>
          <p>We're transitioning into a world where:</p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>agents will be regularly writing and executing arbitrary code autonomously</li>
            <li>agents will be <a className="text-blue-500" href="https://www.skyfire.xyz">making payments</a> on your behalf</li>
            <li>agents will be interacting with humans in <a className="text-blue-500" href="https://www.netcraft.com/news/netcraft-announces-new-ai-powered-innovations/">negotations without human oversight</a></li>
            <li>agents will self-healing and evolving during runtime</li>


          </ul>
          <p className="mb-6">Current oversight techniques like continual human monitoring are not a viable long term solution as we move towards clusters of millions of agents performing economically useful activity on the internet. It is imperative that those deploying agents in the wild have the ability to detect and avoid problematic or unintended behaviors of their systems. Lack of these systems will hinder confident deployment in real-world scenarios and limit the usefulness of agent research and activity. Our platform addresses the following key challenges:</p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>There are no good solutions to real-time monitoring of AI agent actions</li>
            <li>Approval mechanisms for accepting or rejecting agent actions are primitive and inflexible</li>
            <li>Lack of high-fidelity monitoring and oversight makes managing large-scale agent evaluations hard</li>
            <li>Lack of a standardized framework for implementing oversight across different AI systems</li>
          </ul>
        </section>


        <section>
          <h3 className="text-2xl font-bold">
            Key Features
          </h3>
          <ol className="list-decimal pl-8 space-y-4">
            <li><strong>Human-in-the-Loop Interface:</strong> Efficient monitoring and intervention interface for human reviewers</li>
            <li><strong>Pluggable Approvers:</strong> A flexible system of approval mechanisms customizable to specific AI applications, ranging from simple allow-list checks to complex AI-powered oversight models.</li>
            <li><strong>Approval Manager:</strong> Orchestrates multiple Approvers, handling escalations and logging decisions for a layered approach to oversight, combining automated checks with human intervention when necessary.</li>
            <li><strong>Granular Action Monitoring:</strong> Comprehensive monitoring of network requests, executed commands, and detailed actions in headless browsers, providing unparalleled visibility into AI agent behaviors.</li>
            <li><strong>Policy-Based Control:</strong> Define custom policies for automatic approval or blocking of agent actions based on predefined criteria, reducing the need for constant human supervision.</li>
            <li><strong>Scalable Architecture:</strong> Designed to handle multiple concurrent AI agents for efficient large-scale evaluations and deployments, future-proofing your research infrastructure.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Where we're headed</h2>
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
            <a href="#" className="text-blue-700 underline mr-8">contact</a>
          </p>
        </section>
      </main>

      <footer className="mt-16 pt-8 border-t-2 border-black text-center text-sm">
        <p>&copy; 2024 {name}. All rights reserved.</p>
        <p className="mt-2">
          <pre>
            {`
     ___
    /   \
  |  O  O |
          |   ∩   |
             \___/
    /     \
  |       |---O
  |       |
  |       |---O
    \     /
      | |
    /   \
    /     \
          `}
          </pre>

        </p>
      </footer>
    </div >

  );
};

export default NinetiesWebsite;
