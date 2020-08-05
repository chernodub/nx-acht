# ui-buttons

The library is generated with Nx CLI. The library contains re-usable dumb button components.

## Usage

To be able to use these components, import `CommonUiButtonsModule` to your `app.module.ts` and use component on template.

Contributing
To add component, use _Nx CLI_ or the following command for _Angular CLI_ (do not forget to change `COMPONENT_NAME` to the name you want to use):

```
npx ng generate @schematics/angular:component --name=COMPONENT_NAME --project=shared-components --changeDetection=OnPush --displayBlock --export --no-interactive --dry-run
```

## Running unit tests

Run nx test common-ui-buttons to execute the unit tests.
