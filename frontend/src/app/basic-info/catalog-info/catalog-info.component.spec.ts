import {CatalogInfoComponent} from './catalog-info.component';
import {createHostFactory, SpectatorHost} from "@ngneat/spectator";
import {of} from "rxjs";


describe('CatalogInfoComponent', () => {
  let spectator: SpectatorHost<CatalogInfoComponent>;
  const createHost = createHostFactory(CatalogInfoComponent);

  beforeEach(() => {
    spectator = createHost(`<app-catalog-info [data]="data"></app-catalog-info>`, {
      hostProps: {
        data: of({id: 1})
      }
    });
  });

  it('should set value of input', () => {
    expect((spectator.query('input') as HTMLInputElement).value).toBe('');
  });
});
