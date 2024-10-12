import React from 'react';

const Home = () => {
  const name = 'Entropy Labs';
  return (
    <div className="bg-white text-black font-serif p-8 max-w-4xl mx-auto space-y-6">
      <nav className="flex justify-between items-center mt-32 mb-16">
        <div className="text-5xl font-bold">{name}</div>
        <p>Advanced Agent Oversight</p>
        <a href="https://github.com/entropylabsai/sentinel" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
      </nav>

      <main className="space-y-12">
        <section>
          <p>
            Entropy Labs is building the infrastructure to enable Scalable Oversight, in pursuit of safe and effective agentic AI.
          </p>
          <br />
          <p>
            Using both automated and manual review of agent actions, we're aiming to enable large fleets of agents to operate on the internet, whilst providing granular observability into the agents and their operating environments.
          </p>
        </section>

        <section>
          <div className="flex flex-row gap-4">
            <div className="bg-gray-100 w-full rounded-md p-4">
              <h2 className="text-xl mb-4">🎇 We have open sourced Sentinel 🎇</h2>
              <p>Sentinel provides an easy way to monitor and control clusters of agents running in the wild. Get started <a href="https://github.com/entropylabsai/sentinel" target="_blank" rel="noopener noreferrer" className="text-blue-500">here</a>.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Use case</h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>You're a an AI lab evaluating the capabilities of agents at scale in high-risk domains. You want to have absolute control over what actions are executed in the world and in your environments, without having to manually review everything your agents do</li>
            <li>You're a research scientist that wants to evaluate the efficacy of new control methods for agentic systems</li>
            <li>You're a developer building an AI pipeline and you want to deploy an early agent to your customers, iteratively improve it and avoid critical failures</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">How?</h2>
          <p>
            To do this we're building an pluggable <b>Approval Manager</b> that integrates into your agent in a few lines of code. The Approval Manager integrates with a suite of <b>Approvers</b> to automate the detection, blocking and approval of actions. These Approvers monitor network requests, executed commands and actions taken in headless browsers, and can intelligently approve or block agent actions and escalate to human review when necessary.
          </p>
          <br />
          <p>
            You don't have to use our Approvers, you can write your own.
          </p>
          <br />
          <p>
            With an Approval Manager we can orchestrate multiple Approvers, handling escalations for a layered approach to oversight, combining automated checks with human intervention when necessary.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">The challenge</h2>
          <p className="mb-6">Increasingly capable agentic AI systems with web access and code execution abilities present new challenges that existing zero-trust oversight techniques are ill-equipped to handle.</p>
          <p>We're transitioning into a world where:</p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>highly capable agents will be writing and executing arbitrary code autonomously</li>
            <li>agents that can operate at millions of requests per second will be <a className="text-blue-500" href="https://www.skyfire.xyz">making payments</a> on your behalf</li>
            <li>agents will be interacting with humans in <a className="text-blue-500" href="https://www.netcraft.com/news/netcraft-announces-new-ai-powered-innovations/">negotiations without human oversight</a></li>
            <li>agents will self-heal and evolving during runtime</li>


          </ul>
          <p className="mb-6">Current oversight techniques used for agentic systems like continuous human monitoring are not a viable long term solution as we move towards clusters of millions of agents performing economically useful activity on the internet. It is imperative that those deploying agents in the wild have the ability to detect and avoid problematic or unintended behaviors of their systems. Lack of these systems will hinder confident deployment in real-world scenarios and limit the usefulness of agent research and activity. Our platform addresses the following key challenges:</p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>There are no good solutions to real-time monitoring of AI agent actions</li>
            <li>Approval mechanisms for accepting or rejecting agent actions are primitive and inflexible</li>
            <li>Lack of high-fidelity monitoring and oversight makes managing large-scale agent evaluations hard</li>
            <li>Lack of a standardized framework for implementing oversight across different AI systems</li>
          </ul>
        </section>


        <section>
          <h3 className="text-2xl font-bold">
            Features
          </h3>
          <p>We provide infrastructure that slots into your existing agent code in a few lines and offers the following capabilities:</p>
          <ol className="list-decimal pl-8 space-y-4">
            <li><strong>Approvers:</strong> A simple system that allows you to define arbitrary checks for agent actions, ranging from simple allow-list checks to complex AI-powered oversight models. Use ours or bring your own.</li>
            <li><strong>Human-in-the-Loop Interface:</strong> We provide an efficient monitoring and intervention interface for human reviewers</li>
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

        <section className="mt-16 space-y-8">
          <p>
            We're currently working with early adopters to build out this technology. If you're an AI lab or an agent company and would like to test it out, please get in touch and we'll help you integrate it.
          </p>
          <p className="text-center text-xl">
            <a href="mail:devs@entropy-labs.ai" className="text-blue-700 underline mr-8">devs@entropy-labs.ai</a>
          </p>
        </section>
      </main>

      <footer className="mt-16 pt-8 border-t-2 border-black text-center text-sm">
        <p>&copy; 2024 {name}. All rights reserved.</p>
      </footer>
    </div >
  );
};

export default Home;
