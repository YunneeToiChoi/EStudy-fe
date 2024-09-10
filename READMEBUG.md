## SONARCLOUD
# BUG1
![alt text](public\img\image-4.png)
Offering the same experience with the mouse and the keyboard allow users to pick their preferred devices.

Additionally, users of assistive technology will also be able to browse the site even if they cannot use the mouse.

This rules detects the following issues:

when onClick is not accompanied by at least one of the following: onKeyUp, onKeyDown, onKeyPress.
when onmouseover/onmouseout are not paired by onfocus/onblur.
![alt text](public\img\image-5.png)

# BUG2
![alt text](public\img\image-6.png)
Attaching event handlers to non-interactive HTML elements can lead to significant accessibility issues. These elements, such as <div> and <span>, are not designed to interact with assistive technologies like screen readers, making it difficult for users with disabilities to navigate and interact with the website. Additionally, these elements may not be focusable or provide visual feedback when interacted with, resulting in a confusing and potentially frustrating user experience. Therefore, to maintain an accessible and user-friendly website, event handlers should be used exclusively with interactive elements.
![alt text](public\img\image-7.png)

# BUG3
![alt text](public\img\image-8.png)
Offering the same experience with the mouse and the keyboard allow users to pick their preferred devices.

Additionally, users of assistive technology will also be able to browse the site even if they cannot use the mouse.

This rules detects the following issues:

when onClick is not accompanied by at least one of the following: onKeyUp, onKeyDown, onKeyPress.
when onmouseover/onmouseout are not paired by onfocus/onblur.
![alt text](public\img\image-9.png)