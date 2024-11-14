## Accessible Form UI

Roadmap project link: https://roadmap.sh/projects/accessible-form-ui/solutions?u=64b1bc4d5f038d81eeb4b894

Roadmap project: https://roadmap.sh/projects/accessible-form-ui

Github link: https://github.com/axlwolf/AccessiebleFormUI

Github pages link: https://axlwolf.github.io/AccessiebleFormUI/


In this project, you are required to create a form UI using only HTML and CSS. The form will include fields for a full name, email, password, and confirm password, along with a button to toggle the visibility of the password text. Additionally, the form will feature a completeness progress bar and a checklist of requirements that must be met for the form to reach 100% completeness. While this version of the form won’t be functional, it will be a static UI component that can be enhanced with JavaScript in the future.

The goal of this project is to not only help you practice your HTML and CSS but also to focus on creating an accessible form that is easy to use for all users, including those with disabilities. Given below is the rough mockup of the form UI that you need to create:

![Accessible Form UI](https://assets.roadmap.sh/guest/form-components-7t4b3.png)
Accessibility Guidelines
You should read up on accessibility guidelines and best practices before starting this project. However, here are some key points to keep in mind while creating an accessible form UI:

Labeling: Ensure that each form field has a corresponding <label> element that is clearly associated with the field using the for attribute.
Focus State: Style the focus state of each input field so that users navigating with a keyboard can easily see which field is currently active.
Error Messaging: Consider adding space for error messages that can be displayed when a user inputs invalid data. These messages should be clearly associated with the relevant input field.
ARIA Attributes: Use ARIA (Accessible Rich Internet Applications) attributes where necessary, such as aria-required for required fields and aria-invalid for fields with errors.
Color Contrast: Ensure that the color contrast between text and background is sufficient to meet WCAG (Web Content Accessibility Guidelines) standards, making the form readable for users with visual impairments.
Interactive Elements: Make sure that the button to show/hide the password is accessible via keyboard and screen readers, providing clear feedback on the current state (e.g., “Password is hidden” or “Password is visible”).
Once done, you can test the form UI using a screen reader or browser extensions like Axe or Lighthouse to check for accessibility issues and make necessary adjustments.

After completing this project, you will have a solid foundation in creating accessible and well-structured forms using HTML and CSS. You can later enhance this form by adding JavaScript to make it fully functional and dynamic in future projects.


### Get started

```
  git clone https://github.com/axlwolf/rm-DatepickerUI.git my_project
  cd my_project
  npm i
  npm start
```

### Put your files into /src folder.

Don't forget add to index.html this line:
```
  <script type="text/javascript" src="../build/app.js"></script>
```

### For build

```
  npm run build
```

### Features

- Lightweight, fast opened.
- Webpack livereload separated config
- Html5/Css3/JS(es6/vanilla)/images(png, jpg, gif, svg) optimization/minify.
- Include 5 pure css media queries points and best normalize css practices.
- Include all you needed html meta tags.
- ES6 and browserify syntax support. (require, arrow func, let const etc...).

### 2020 updates

- SASS support (thanks @patrikniebur)
