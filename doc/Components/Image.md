Image
===

Displays an image.

**Don't forget to add dimension to your image**.

# Props

## `source`

```javascript
<Image source="http://..." />
<Image source="data:image/png;base64,iVBORw0KGgoAAAANSUhEU...." />
<Image source={uri: "http://..."} />
<Image source={require('../image.jpg')} />
```

```javascript
type $source = string | number | {uri: string};
```
