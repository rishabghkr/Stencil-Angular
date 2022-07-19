# navbar-component



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description | Type                                | Default     |
| ----------------- | ------------------- | ----------- | ----------------------------------- | ----------- |
| `home`            | `home`              |             | `string`                            | `undefined` |
| `items`           | --                  |             | `{ name: string; goto: string; }[]` | `undefined` |
| `sidebarIconSize` | `sidebar-icon-size` |             | `string`                            | `"1"`       |
| `styles`          | --                  |             | `{ [key: string]: string; }`        | `undefined` |


## Dependencies

### Depends on

- [sidebar-button](../sidebar-button)
- [link-component](../link-component)
- [navbar-item](../navbar-item)

### Graph
```mermaid
graph TD;
  navbar-component --> sidebar-button
  navbar-component --> link-component
  navbar-component --> navbar-item
  sidebar-button --> sidebar-icon
  navbar-item --> link-component
  style navbar-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
