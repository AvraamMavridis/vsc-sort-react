# vsc-sort-react README

[![Greenkeeper badge](https://badges.greenkeeper.io/AvraamMavridis/vsc-sort-react.svg)](https://greenkeeper.io/)

Press `⇧⌘P` and start typing `Sort`

You should have 3 options.

- Sort alphabetically
- Sort properties by the length of their name
- Sort properties by the length of the line

<img src="https://github.com/AvraamMavridis/vsc-sort-react/blob/master/images/sort_screenshot.png?raw=true" />


## Sort Alphabetically Example

This

```javascript
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isCircled: PropTypes.bool,
    src: PropTypes.string.isRequired,
    isBackgroundImage: PropTypes.bool
    tinySrc: PropTypes.string,
  };
```

Will be converted to

```javascript
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isBackgroundImage: PropTypes.bool,
    isCircled: PropTypes.bool,
    src: PropTypes.string.isRequired,
    tinySrc: PropTypes.string
  };
```
## Sort by name length

This

```javascript
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isCircled: PropTypes.bool,
    src: PropTypes.string.isRequired,
    isBackgroundImage: PropTypes.bool
    tinySrc: PropTypes.string,
  };
```

Will be converted to

```javascript
  static propTypes = {
    src: PropTypes.string.isRequired,
    tinySrc: PropTypes.string,
    children: PropTypes.node,
    isCircled: PropTypes.bool,
    className: PropTypes.string,
    isBackgroundImage: PropTypes.bool
  };
```

## Sort by line length

This

```javascript
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isCircled: PropTypes.bool,
    src: PropTypes.string.isRequired,
    isBackgroundImage: PropTypes.bool
    tinySrc: PropTypes.string,
  };
```

Will be converted to

```javascript
  static propTypes = {
    children: PropTypes.node,
    isCircled: PropTypes.bool,
    tinySrc: PropTypes.string,
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    isBackgroundImage: PropTypes.bool
  };
```



