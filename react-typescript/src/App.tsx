import React from "react";
import "./App.css";

function App() {
  return (
    <div className="flex">
      <div className="px-8 py-12 w-10/12 mx-auto">
        <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight">
          Can we create Honeycomb in Tailwind?
          <br />
          <span className="text-red-base">Yes we can!</span>
        </h1>
        <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
          Tailwind CSS is a set of Util classes that allow you to create what
          you want from the atomic decisions of your design system.
        </p>

        <div className="mt-4">
          <label className="mb-1">Form label</label>
          <p>This is the help text</p>
          <input type="text" placeholder="Text input" />
          <br />
          <label className="mt-4">Form label</label>
          <p>This is the help text</p>
          <input type="text" required placeholder="Text input" />
          <p className="text-red-base mt-1">Error message goes here</p>
          <div className="mt-4">
            <input
              type="checkbox"
              name="choice-1"
              id="choice-1"
              value="Choice 1"
              checked
            />
            <label htmlFor="choice-1">Selected</label>

            <input
              type="checkbox"
              name="choice-2"
              id="choice-2"
              value="Choice 2"
            />
            <label htmlFor="choice-2">Unselected</label>

            <input
              type="checkbox"
              name="choice-3"
              id="choice-3"
              value="Choice 3"
              disabled
            />
            <label htmlFor="choice-3">Disabled</label>
          </div>
        </div>

        <div className="mt-4">
          <a href="#" className="btn px-8">
            Here's an Anchor Button
          </a>
        </div>
        <div className="mt-4">
          <div className="mt-4 msg msg-info">
            Here is some information you should know. <a href="#">See more</a>
          </div>
          <div className="mt-4 msg msg-success">
            Here is some information you should know. <a href="#">See more</a>
          </div>
          <div className="mt-4 msg msg-warning">
            Here is some information you should know. <a href="#">See more</a>
          </div>
          <div className="mt-4 msg msg-error">
            Here is some information you should know. <a href="#">See more</a>
          </div>

          <div className="mt-4 msg-light msg-info">
            Here is some information you should know. <a href="#">See more</a>
          </div>
          <div className="mt-4 msg-light msg-success">
            Here is some information you should know. <a href="#">See more</a>
          </div>
          <div className="mt-4 msg-light msg-warning">
            Here is some information you should know. <a href="#">See more</a>
          </div>
          <div className="mt-4 msg-light msg-error">
            Here is some information you should know. <a href="#">See more</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
