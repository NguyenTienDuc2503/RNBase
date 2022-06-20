export interface GenericListInitialState<T> {
  isLoading?: boolean;
  isLoadingAgentPending?: boolean;
  isLoadingPending?: boolean;
  isLoadingDone?: boolean;
  isLoadingHistory?: boolean;
  isLoadingCancel?: boolean;
  error?: Error | null | boolean;
  errorPending?: Error | null | boolean;
  errorDone?: Error | null | boolean;
  errorHistory?: Error | null | boolean;
  errorCancel?: Error | null | boolean;
  errorAgentPending?: Error | null | boolean;
  data?: T[];
  listPendingOrder?: T[];
  listDoneOrder?: T[];
  listHistoryOrder?: T[];
  listCancelOrder?: T[];
  listAgentPendingOrder?: T[];
  paging?: {
    page: number;
    limit: number;
  };
  totalPrice?: number | undefined;
  dialogLoading?: boolean;
  dataCate?: T[];
  idSelectChildEterprise?: number;
  nextPage?: number;
}

export interface GenericInitialState<T> {
  isLoading: boolean;
  dialogLoading?: boolean;
  error?: Error | null | boolean;
  data?: T;
  paging?: {
    page: number;
    limit: number;
  };
  dataEnterprise?: T;
  totalPrice?: number | undefined;
  isLoadMore?: boolean;
  isLastPage?: boolean;
  countNotification?: number;
}
