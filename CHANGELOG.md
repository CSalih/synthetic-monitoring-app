# Change Log

# [1.9.10](https://github.com/grafana/synthetic-monitoring-app/compare/v1.9.9...v1.9.10) (2022-2-16)

### Bug fixes

- Use datasource UIDs when creating dashboards instead of names
- Fix a potential infinite routing loop when initializing on prem

# [1.9.9](https://github.com/grafana/synthetic-monitoring-app/compare/v1.9.8...v1.9.9) (2022-2-04)

## Features

- Rearranged checklist filters under a central dropdown

# [1.9.8](https://github.com/grafana/synthetic-monitoring-app/compare/v1.9.7...v1.9.8) (2022-2-01)

# [1.9.7](https://github.com/grafana/synthetic-monitoring-app/compare/v1.9.6...v1.9.7) (2022-1-25)

## Features

- Adds a map to the probe edit page to visualize longitude & latitude

# [1.9.6](https://github.com/grafana/synthetic-monitoring-app/compare/v1.9.5...v1.9.6) (2022-1-21)

### Features

- Increase the maximum quantity of labels per check to 10.

# [1.9.5](https://github.com/grafana/synthetic-monitoring-app/compare/v1.9.4...v1.9.5) (2022-1-21)

### Bug fixes

- Fix a race condition that prevented values from showing up when navigating to the edit check form

# [1.9.4](https://github.com/grafana/synthetic-monitoring-app/compare/v1.9.3...v1.9.4) (2022-1-19)

### Bug fixes

- Update routing to use React router
- Fix a bug in the usage prediction calculation
- Accessibility fixes

### Features

- Include traceroute checks in the Terraform config export

# [1.9.3](https://github.com/grafana/synthetic-monitoring-app/compare/v1.9.2...v1.9.3) (2022-1-10)

### Bug fixes

- Gracefully handle inability to connect to API

# [1.9.2](https://github.com/grafana/synthetic-monitoring-app/compare/v1.8.1...v1.9.2) (2022-1-06)

### Features

- Added the ability to bulk edit probes for checks

# [1.8.1](https://github.com/grafana/synthetic-monitoring-app/compare/v1.8.0...v1.8.1) (2022-1-04)

### Bug Fixes

- Update the README with additional configuration details

# [1.8.0](https://github.com/grafana/synthetic-monitoring-app/compare/v1.7.0...v1.8.0) (2022-1-04)

### Features

- Add a `terraform import` command to the terraform config download. This allows users to generate intial TF state.

### Bug Fixes

- Replace worldmap panel plugin with geomap panel in all the dashboards
- Use the updated timeseries panel in the summary dashboard
- Rename the DNS dashboard to align with the other dashboards

# [1.7.0](https://github.com/grafana/synthetic-monitoring-app/compare/v1.61...v1.7.0) (2021-12-01)

### Features

- Add the ability to export checks and probes as terraform config from the plugin config page
- Add a button to generate a new API key in the plugin config page

# [1.6.0](https://github.com/grafana/synthetic-monitoring-app/compare/v1.5.6...v1.6.0) (2021-11-17)

### Features

- Add traceroute check type

# [1.5.6](https://github.com/grafana/synthetic-monitoring-app/compare/v1.5.5...v1.5.6) (2021-11-15)

### Bug Fixes

- Add data points per minute to usage calculator

# [1.5.5](https://github.com/grafana/synthetic-monitoring-app/compare/v1.5.4...v1.5.5) (2021-10-29)

### Features

- Mark deprecated probes as such in check editor. Prevent adding deprecated probes to checks.

# [1.5.3](https://github.com/grafana/synthetic-monitoring-app/compare/v1.5.2...v1.5.3) (2021-09-20)

### Bug Fixes

- Fix a dashboard config error

# [1.5.2](https://github.com/grafana/synthetic-monitoring-app/compare/v1.3.3...v1.5.2) (2021-09-20)

### Bug Fixes

- make homepage usage breakpoints smaller ([#367](https://github.com/grafana/synthetic-monitoring-app/issues/367)) ([d157abe](https://github.com/grafana/synthetic-monitoring-app/commit/d157abe6fdb53a1aefcfba81cc08270ab9a9e735))

# [1.5.1](https://github.com/grafana/synthetic-monitoring-app/compare/v1.3.3...v1.6.0) (2021-09-14)

### Bug Fixes

- config setup button was routing to a 404 ([#365](https://github.com/grafana/synthetic-monitoring-app/issues/365)) ([a08a9c8](https://github.com/grafana/synthetic-monitoring-app/commit/a08a9c8ac335d83bada5ee23a081be4f3fbee4fd))

# [1.5.0](https://github.com/grafana/synthetic-monitoring-app/compare/v1.3.3...v1.5.0) (2021-09-13)

### Features

- add a homepage ([625beb9](https://github.com/grafana/synthetic-monitoring-app/commit/625beb9a1bfad4e504d48791aef6417354195353))

# [1.4.0](https://github.com/grafana/synthetic-monitoring-app/compare/v1.3.3...v1.4.0) (2021-09-08)

### Features

- Add beta feature traceroute behind a feature flag ([#245](https://github.com/grafana/synthetic-monitoring-app/issues/245)) ([89ab9b1](https://github.com/grafana/synthetic-monitoring-app/commit/89ab9b1427734f88f8590bb15f59b786f02bed11))

# [1.3.2](https://github.com/grafana/synthetic-monitoring-app/compare/1.3.1...1.3.2) (2021-09-08)

### Bug Fixes

- check type selector should be disabled on edit ([#360](https://github.com/grafana/synthetic-monitoring-app/issues/360)) ([dda165e](https://github.com/grafana/synthetic-monitoring-app/commit/dda165e6187370d2726d4db0e31b8af2fe5bfa36))

# [1.3.0](https://github.com/grafana/synthetic-monitoring-app/compare/v1.2.30...v1.3.0) (2021-08-27)

### Bug Fixes

- go back to circle bild ([7d159fa](https://github.com/grafana/synthetic-monitoring-app/commit/7d159fadf099845dbe09b8bd4e57ea210bb783c7))

### Features

- almost there... skipping docs publish step ([d97521c](https://github.com/grafana/synthetic-monitoring-app/commit/d97521ce6038149f406bcce6406bc9242b11242e))
- gcom token secret ([1c2b5b8](https://github.com/grafana/synthetic-monitoring-app/commit/1c2b5b8473cc1cf719c0c678db1af60829f33ad1))

## [1.2.30] - 2021-08-27

- New start to changelog with updated build process
