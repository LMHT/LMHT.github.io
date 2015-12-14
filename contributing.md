# Contributing to LMHT

Thank you for your interest in contributing to LMHT! Enclosed are guidelines for helping us improve the source code and make LMHT an excellent learning tool.  This document is long so here are links to the major sections:

* [Ways to Contribute](#ways-to-contribute)
* [Submit an Issue](#submit-an-issue)
* [Request a Feature](#request-a-feature)
* [Edit Documentation](#edit-documentation)
* [Become a GitHub Contributor](#become-a-github-contributor)
* [Approval Process](#approval-process)

## Ways to Contribute

There are several ways to contribute to LMHT depending on your level of GitHub experience and what you want to accomplish:

* [Submit an Issue](#submit-an-issue)
* [Request a Feature](#request-a-feature)
* [Edit Documentation](#edit-documentation)
* [Become a GitHub Contributor](#become-a-github-contributor)

## Submit an Issue

Before submitting an issue, please visit the LMHT repository's [Issues page] to verify it is not already a known issue. If it is a new issue, click "New Issue" in the upper right corner and title it according to what the issue is. Issues are tracked by title, so make it as accurate as possible. Then leave a detailed comment about what the issue is, where it occurs, what button or feature you were trying to use, what did not work correctly, how should it have worked, etc. If possible, submit screen shots or any applicable files to document the issue.  Please do not assign any milestones or labels&mdash;we will do that.

Once an issue is submitted, we will review it and request any additional information needed to verify the issue. If it is a valid issue, we will keep it on the issues list to be addressed in the future.

## Request a Feature

Currently, we are using the [Issues page] to also make feature requests. Before making a feature request, please review the website and make sure that this feature is in line with the site's direction and it is not a repeat request. It is up to you to submit a strong case for approving this feature.

To submit your feature request, follow the directions [in the above section](#submit-an-issue) for submitting an issue. Be as detailed as possible about what you want this feature to do. We will review your case and decide accordingly. Not all requests will be approved.

## Edit Documentation

There are two ways you can submit a change to documentation. The [Issues page] can be used as well as [email]. In either case make a copy of the documentation, edit it, clearly marking the changes you are requesting, and submit it. Both email and the Issues page allow you to copy the document into your submission.

[Issues page]: https://github.com/LMHT/LMHT.github.io/issues
[email]: mailto:lmht@adorable.io

## Become a GitHub Contributor

As a contributor, the expectation is that you can use Git and GitHub comfortably enough to fork branches, make pull requests, and practice good commit hygiene.

(These directions are straight from [Contributing to Open Source])

1.  Fork the repository and clone it locally. Attach your local to the original "upstream" repository by adding it as a remote. Pull the changes from upstream daily so that you are modifying current data when you submit a pull request. More in-depth instructions [here].

2.  Create a branch for your edits. Depending on what you have loaded in your editor, `git checkout -b name-your-branch-here`, should suffice.

3.  It is common practice to name your branch according to what it is fixing or updating. Before submitting these changes, verify they work. You can include screenshots of the before and after, if the changes are HTML/CSS based, and drop those images into your pull request for further verification. Please try to maintain the look of the site as we currently have it.  One way to verify your changes is to see them "in action" by running a local server and viewing your branch's web site as it would look once it is merged.  

      To run a local server, open iterm or whichever emulator you are using and go to your GitHub project's folder.  From that command prompt, type:  python -m SimpleHTTPServer.  You will need to keep this open until you are shutting the server down.  Go to your browser and type:  http://0.0.0.0:8000/  This will open up your local version of the site so you can verify your changes.

4.  Once you have submitted a pull request, we will review it. Post any changes or suggestions for review or opinion and handle accordingly. Not every pull request will be added to our database. Follow the request to keep up to date on its status.

[Contributing to Open Source]:  https://guides.github.com/activities/contributing-to-open-source/#contributing
[here]:  https://help.github.com/articles/syncing-a-fork/

### Approval Process

Once you have submitted a pull request, we will review it and the issue it is addressing. If it correctly addresses an outstanding issue, it will go through a two thumbs-up verification process at which point it will be merged with the database to fix the issue.

Sometimes an issue will stay open even though the bug has been fixed. And sometimes, the original bug may go stale because something has changed in the meantime. We will prioritize the fixes and update the issues accordingly.
