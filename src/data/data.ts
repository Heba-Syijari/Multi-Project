
interface DefaultContextConfig {
      provision: number,
      maxCurrencyCalculationRows: number,
      currencyExchangeCourses: {
          label: string,
      }[]
}

export const DEFAULT_CONTEXT_CONFIG: DefaultContextConfig = {
    provision: 0,
    maxCurrencyCalculationRows: 5,
    currencyExchangeCourses: [
      {
        label: "Project 1"
      },
      {
        label: "Project 2",
      },
      {
        label: "Project 3",
      },
      {
        label: "Project 4",
      },
      {
        label: "Project 5",
      },
    ],
}
