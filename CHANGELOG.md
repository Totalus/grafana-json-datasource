# Changelog

## 1.1.1 (2021-04-17)

[Full changelog](https://github.com/marcusolsson/grafana-json-datasource/compare/v1.1.0...v1.1.1)

### Enhancements

- Improve editor styling

### Bug fixes

- Fix issue where wrong fields were used when grouping
- Add variable support for aliases

## 1.1.0 (2021-04-15)

[Full changelog](https://github.com/marcusolsson/grafana-json-datasource/compare/v1.0.1...v1.1.0)

This release introduces an Experimental tab to the query editor. This will be used to let users try out features while they're being developed. Each feature has a link the the GitHub issue where you can share you feedback, before the feature is considered stable.

### Enhancements

- Extend variables support to options
- Don't detect time fields from Unix epoch ([#82](https://github.com/marcusolsson/grafana-json-datasource/issues/82))
- Add params to cache key ([#85](https://github.com/marcusolsson/grafana-json-datasource/issues/85))
- Add support for field aliases
- Add Experimental section to query editor to test features under development
- Experimental: Group query results by field ([#36](https://github.com/marcusolsson/grafana-json-datasource/issues/36))
- Experimental: Set display name for metric fields ([#36](https://github.com/marcusolsson/grafana-json-datasource/issues/36))
- Experimental: Set optional label for variables ([#79](https://github.com/marcusolsson/grafana-json-datasource/issues/79))

### Bug fixes

- Ignore hidden queries ([#83](https://github.com/marcusolsson/grafana-json-datasource/issues/83))
- New queries don't use default values

## 1.0.1 (2021-03-05)

[Full changelog](https://github.com/marcusolsson/grafana-json-datasource/compare/v1.0.0...v1.0.1)

### Enhancements

- Add annotation support

### Bug fixes

- Can't connect to API when URL contains encoded slash ([#59](https://github.com/marcusolsson/grafana-json-datasource/issues/59))

## 1.0.0 (2021-03-04)

[Full changelog](https://github.com/marcusolsson/grafana-json-datasource/compare/v0.10.1...v1.0.0)

No noteworthy features or bug fixes in this release. Mostly metadata updates.

## 0.10.1 (2021-02-27)

[Full changelog](https://github.com/marcusolsson/grafana-json-datasource/compare/v0.10.0...v0.10.1)

### Bug fixes

- Undefined cache duration isn't handled
- Query editor tries to update read only property

## 0.10.0 (2021-02-19)

[Full changelog](https://github.com/marcusolsson/grafana-json-datasource/compare/v0.9.2...v0.10.0)

### Enhancements

- Add auto-completion to JSON Path queries

## 0.9.2 (2021-02-03)

[Full changelog](https://github.com/marcusolsson/grafana-json-datasource/compare/v0.9.1...v0.9.2)

### Bug fixes

- Variable queries fail with error ([#48](https://github.com/marcusolsson/grafana-json-datasource/issues/48))

## 0.9.1 (2021-02-01)

[Full changelog](https://github.com/marcusolsson/grafana-json-datasource/compare/v0.9.0...v0.9.1)

### Bug fixes

- Cannot read property 'toString' of null ([#46](https://github.com/marcusolsson/grafana-json-datasource/issues/46))

## 0.9.0 (2021-02-01)

[Full changelog](https://github.com/marcusolsson/grafana-json-datasource/compare/v0.8.0...v0.9.0)

**BREAKING CHANGE:** Query parameters set by the query editor no longer overrides the data source config, to match how headers are handled in the Grafana proxy. This establishes the convention that any configuration made by an administrator should have higher priority.

**IMPORTANT:** This release contains many new changes that touches several aspects of the plugin. **Make sure that you back up your dashboards before updating your plugin.**

This release introduces a new query editor that gives more control of the request.

- Support for both GET and POST methods
- Support for request bodies (when using POST)
- Support for headers

It introduces a new key value editor for query parameters and headers, as well as a Monaco-based editor for editing the request body with syntax highlighting.

This release deprecates the `queryString` property in the query model, in favor of the new `params`. The query string config _should_ be backwards-compatible (and forward-compatible) with previous versions, but make sure to back up your dashboard before upgrading.

## 0.8.0 (2021-01-08)

[Full changelog](https://github.com/marcusolsson/grafana-json-datasource/compare/v0.7.1...v0.8.0)

### Enhancements

- Use the refId as the series name
- Add type configuration for queries ([#37](https://github.com/marcusolsson/grafana-json-datasource/issues/37))

### Bug fixes

- Grafana Explore gets stuck when adding a second query ([#31](https://github.com/marcusolsson/grafana-json-datasource/issues/31))
- Multiple data source queries overwrite each other

## 0.7.1 (2020-12-07)

[Full changelog](https://github.com/marcusolsson/grafana-json-datasource/compare/v0.7.0...v0.7.1)

### Bug fixes

- Falsy values are returned as NaN ([#25](https://github.com/marcusolsson/grafana-json-datasource/issues/25))

## 0.7.0 (2020-12-04)

[Full changelog](https://github.com/marcusolsson/grafana-json-datasource/compare/v0.6.4...v0.7.0)

### Enhancements

- Add support for custom paths ([#24](https://github.com/marcusolsson/grafana-json-datasource/pull/24))
- Add epoch time macros ([#22](https://github.com/marcusolsson/grafana-json-datasource/pull/22))
- Migrate to new form components. This bumps the minimum required Grafana version to 7.3.0

### Bug fixes

- Template variable chaining is not working ([#23](https://github.com/marcusolsson/grafana-json-datasource/issues/23))
- Cannot read property 'length' of null ([#21](https://github.com/marcusolsson/grafana-json-datasource/issues/21))

## 0.6.4 (2020-11-30)

[Full changelog](https://github.com/marcusolsson/grafana-json-datasource/compare/v0.6.3...v0.6.4)

### Bug fixes

- Fixes an issue where custom query parameters defined in the data source are flipped.

## 0.6.3 (2020-11-27)

[Full changelog](https://github.com/marcusolsson/grafana-json-datasource/compare/v0.6.2...v0.6.3)

### Enhancements

- Updated `@grafana` dependencies from `^7.0.0` to `^7.3.0`
- Improved release process using the new [GitHub workflows](https://github.com/grafana/plugin-workflows) for Grafana plugins
