import {TableComponent} from "./table.component";
import {createComponentFactory, mockProvider, Spectator} from "@ngneat/spectator";
import {Store} from "@ngrx/store";
import {RouterTestingModule} from "@angular/router/testing";
import {ActivatedRoute} from "@angular/router";

describe("TableComponent", () => {
  let spectator: Spectator<TableComponent>;
  const createComponent = createComponentFactory({
    component: TableComponent,
    imports: [
      RouterTestingModule,
    ],
    providers: [mockProvider(Store), {
      provide: ActivatedRoute,
      useValue: {
        params: {
          subscribe: () => {
          }
        },
        snapshot: {params: {id: 1}}
      }
    }],
  });

  beforeEach(() => (spectator = createComponent()));

  it("should create", () => {
    expect(spectator.component).toBeTruthy();
  });
});
