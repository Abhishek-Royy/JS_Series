BOM= Browser Object Model
* Window object ->
        The window object represents an open window in a browser. It's browser object & is automatically created by browser.
    It is a global object with lots of properties & methods.
______________________________________________________________________

DOM tree has three part:
    * parent
    * child
    * sibling

DOM Manupulation:
    Selecting with Id
    Selecting eith Class
    Selecting with tag name

DOM Properties:
    tagName: return tag for elements node.
    innerText: it returns only the text inside the tags.
    tnnerHTML: it returns text include tags and all.
    textContent: it will make visible the hidden text element also.

DOM element method:
    firstChild ->print the first node of its parent element.
    lastChild ->print the last node of its parent element.
    firstChild.children ->print the children node, which are present in the fisrtChild node.


Attributes: 
    getAttribute(attr) ->to get the attribute value.
    setAttribute(attr,value) ->to set the attribute value.

    another is-
        style() ->this attribute is used to given style to the node.


Insert Element: 

    * At first we need to create element to append it ->
        document.createElement("") -> after that append the element.
    node.append(element) ->adds at the end of the node.(inside)
    node.prepend(element) ->adds at the starts of the node.(inside)
    node.before(element) ->adds before the node.(outside)
    node.after(element) ->adds after the node.(outside)
______________________________________________________________________________

Delete Element:
    node.remove() ->This is used to delete node element.