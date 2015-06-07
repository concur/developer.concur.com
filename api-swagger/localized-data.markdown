# Localized Data
* [Retrieves the localized string of various codes in Invoice](#get)
* [Schema](#schema)

## <a name="get"></a>Retrieves the localized string of various codes in Invoice
    GET /invoice/localizeddata

        
### Parameters
Name | Type | Format | Description
-----|------|--------|------------			
`type`	|	`string`	|	`query`	|	Valid types are - approvalStatus, paymentStatus, expenseType, ledgerCode, dataSourceCode, payMethod, receiptConfirmation, unitOfMeasure.`langCode`	|	`string`	|	`query`	|	Optional. The language code requested. lang codes examples - de, en, es, fr, fr_CA, hu, it, ja, pl, pt_BR


## <a name="schema"></a>Schema


###<a name="localizedlist"></a>Localized List
Name | Type | Format | Description
-----|------|--------|------------
`LocalizationData`	|	`Array`	|	[LocalizationData](#localizationdata)	|	TotalCount	|	Int32	|	-	|	
###<a name="localizationdata"></a>Localization Data
Name | Type | Format | Description
-----|------|--------|------------
`Code`	|	`string`	|	-	|	**Required** Internal status code.`LangCode`	|	`string`	|	-	|	**Required** The language code for the results`LocalizedValue`	|	`string`	|	-	|	**Required** The localized value based on langcode and type.


