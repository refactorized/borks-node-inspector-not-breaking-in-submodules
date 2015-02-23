## Status: WIP
This code is not yet able to reproduce target behavior, and will be modified when I am able to devote more time to it.  

**Important:** The current effort focuses around the use of debugger statements, but it may be necessary to test just the breakpointing feature from within the inspector ui, in order to reproduce the issue.  

## What's this?

This is an attempt to reproduce an issue with node-inspector outlined
[here](https://github.com/node-inspector/node-inspector/issues/416)

## To run:
- have nvm and node-ispector.
- modifiy/delete .node-inspectorrc as needed.
- nvm exec node-debug withRequiredSubmodule.js.
- play with different combinations of commented out debugger calls.
