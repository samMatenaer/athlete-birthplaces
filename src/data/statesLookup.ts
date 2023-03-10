export const states = {
  AK: 'Alaska',
  AL: 'Alabama',
  AR: 'Arkansas',
  AZ: 'Arizona',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DC: 'District of Columbia',
  DE: 'Delaware',
  FL: 'Florida',
  GA: 'Georgia',
  HI: 'Hawaii',
  IA: 'Iowa',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  MA: 'Massachusetts',
  MD: 'Maryland',
  ME: 'Maine',
  MI: 'Michigan',
  MN: 'Minnesota',
  MO: 'Missouri',
  MS: 'Mississippi',
  MT: 'Montana',
  NC: 'North Carolina',
  ND: 'North Dakota',
  NE: 'Nebraska',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NV: 'Nevada',
  NY: 'New York',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PA: 'Pennsylvania',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VA: 'Virginia',
  VT: 'Vermont',
  WA: 'Washington',
  WI: 'Wisconsin',
  WV: 'West Virginia',
  WY: 'Wyoming',

  // canadian provinces
  AB: 'Alberta',
  BC: 'British Columbia',
  MB: 'Manitoba',
  NB: 'New Brunswick',
  NF: 'Newfoundland',
  NT: 'Northwest Territory',
  NS: 'Nova Scotia',
  NU: 'Nunavut',
  ON: 'Ontario',
  PE: 'Prince Edward Island',
  QC: 'Quebec',
  SK: 'Saskatchewan',
  YT: 'Yukon',

  // Australian states
  ACT: 'Australian Capital Territory',
  NSW: 'New South Wales',
  QLD: 'Queensland',
  SA: 'South Australia',
  TAS: 'Tasmania',
  VIC: 'Victoria',
};

function hasKey<O extends Record<string, unknown>>(
  obj: O,
  key: string | number | symbol
): key is keyof O {
  return key in obj;
}

export const getStateName = <T extends string | undefined>(stateCode: T): T => {
  const formattedCode = stateCode?.toUpperCase();
  if (formattedCode && hasKey(states, formattedCode)) {
    return states[formattedCode] as T;
  }
  return stateCode;
};
