import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {fetchPage} from "../../state/catalog.actions";
import {selectData, selectTotalPages} from "../../state/selectors";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent {
  public data$ = this.store.select(selectData);
  page = 0;
  pageSize$: Observable<number> = this.store.select(selectTotalPages);

  constructor(private store: Store, public router: Router) {
  }

  fetchPage(event: { page: number }) {
    this.page = event.page;
    this.store.dispatch(fetchPage(event));
  }

  redirect(id: number) {
    this.router.navigateByUrl(`/details/${id}`);
  }
}
