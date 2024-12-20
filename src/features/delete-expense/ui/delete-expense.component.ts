import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ExpensesStorageService } from '@shared/api';
import { ConfirmDialogService, ExpenseAlertService } from '@shared/model';

@Component({
  selector: 'hb-delete-expense',
  templateUrl: './delete-expense.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class DeleteExpenseComponent {
  id = input.required<string>();

  private readonly confirmDialog = inject(ConfirmDialogService);
  private readonly expensesStorage = inject(ExpensesStorageService);
  private readonly expenseAlert = inject(ExpenseAlertService);

  delete(): void {
    this.confirmDialog.openForDelete().subscribe(isConfirmed => {
      if (isConfirmed) {
        this.expensesStorage.delete(this.id());
        this.expenseAlert.afterDelete();
      }
    });
  }
}
