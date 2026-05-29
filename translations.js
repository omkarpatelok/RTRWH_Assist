// Language translations
const translations = {
    'en': {
        // Navigation buttons
        'next': 'Next',
        'back': 'Back',
        'submit': 'Submit',
        // Landing Page
        'title': 'Jal - Sankalp',
        'subtitle': 'Rooftop Rainwater Harvesting Potential Calculator',
        'hackathon': 'Smart India Hackathon 2025',
        'startBtn': 'Start Assessment',

        // Progress
        'stepOf': 'Step {n} of 5',
        'progress': '{n}%',

        // Step 1 - Personal Details
        'personalDetails': 'Personal Details',
        'personalDetailsSubtitle': 'Let\'s start with your basic information',
        'nameLabel': 'Your Name',
        'namePlaceholder': 'Enter your full name',
        'languageLabel': 'Preferred Language',

        // Step 2 - Location Details
        'locationDetails': 'Location Details',
        'locationSubtitle': 'Select your state and district or enter pincode directly',
        'locationMethodLabel': 'Location Selection Method',
        'stateDistrictBtn': 'State & District',
        'pincodeBtn': 'Pincode',
        'gpsBtn': 'GPS Location',
        'stateLabel': 'State',
        'districtLabel': 'District',
        'pincodeLabel': 'Enter Pincode',
        'pincodePlaceholder': 'e.g., 411001',
        'useGpsBtn': 'Use GPS Location',
        'selectedPincodeTitle': 'Selected Pincode',
        'pincodeText': 'Pincode:',
        'locationDetailsTitle': 'Location Details',
        'areaLabel': 'Area:',
        'rainfallLabel': 'Annual Rainfall:',
        'groundwaterLabel': 'Groundwater Level:',

        // Step 3 - Roof Information
        'roofInfo': 'Roof Information',
        'roofSubtitle': 'Specify your roof type and area',
        'roofTypeLabel': 'Roof Type',
        'roofTypes': {
            'concrete': 'Concrete (95%)',
            'metal': 'Metal Sheet (90%)',
            'clay': 'Clay Tiles (85%)',
            'tiles': 'Ceramic Tiles (80%)'
        },
        'measureAreaLabel': 'How would you like to measure roof area?',
        'manualEntry': 'Manual Entry',
        'totalArea': 'Total Area',
        'drawMap': 'Draw on Map',
        'lengthLabel': 'Length (meters)',
        'widthLabel': 'Width (meters)',
        'totalAreaLabel': 'Total Roof Area (sq meters)',
        'currentAreaLabel': 'Current Roof Area:',
        'sqMeters': 'sq meters',
        // Map related translations
        'instructionsTitle': 'Instructions:',
        'mapInstructions': 'Use the map below to draw your roof area. Switch between map views, search for your location, and use the drawing tools to outline your roof.',
        'satelliteView': 'Satellite View',
        'roadmapView': 'Roadmap View',
        'hybridView': 'Hybrid View',
        'startDrawing': 'Start Drawing',
        'clearDrawing': 'Clear Drawing',
        'finishDrawing': 'Finish Drawing',
        'drawnArea': 'Drawn Area:',
        'sqMeters': 'sq meters',
        
        // Area measurement translations
        'lengthInput': 'Enter length',
        'widthInput': 'Enter width',

        // Step 4 - Additional Information
        'additionalInfo': 'Additional Information',
        'additionalSubtitle': 'Optional details for better assessment (recommended)',
        'familyMembersLabel': 'Number of Family Members',
        'familyMembersPlaceholder': 'e.g., 4',
        'waterSourceLabel': 'Water Source',
        'waterSources': {
            'borewell': 'Borewell',
            'municipal': 'Municipal Supply',
            'other': 'Other'
        },
        'waterBillLabel': 'Monthly Water Bill (₹)',
        'waterBillPlaceholder': 'e.g., 1500',

        // Step 5 - Results
        'resultsTitle': 'Assessment Results',
        'resultsSubtitle': 'Your rainwater harvesting potential and recommendations',
        'projectSummary': 'Project Summary',
        'harvestPotential': 'Harvest Potential',
        'monthlyPattern': 'Monthly Collection Pattern',
        'feasibilityTitle': 'Feasibility Assessment',
        'downloadReport': 'Download Report',
        'provideFeedback': 'Provide Feedback',
        'startOver': 'Start Over',
        'feedbackTitle': 'Rate Your Experience',
        'submitFeedback': 'Submit Feedback',

        // Navigation
        'back': 'Back',
        'next': 'Next',
        'calculate': 'Calculate Results',
        
        // Monthly Collection Pattern
        'monthlyCollection': 'Monthly Collection Pattern',
        'monthlyCollectionChart': {
            'jan': 'January',
            'feb': 'February',
            'mar': 'March',
            'apr': 'April',
            'may': 'May',
            'jun': 'June',
            'jul': 'July',
            'aug': 'August',
            'sep': 'September',
            'oct': 'October',
            'nov': 'November',
            'dec': 'December'
        },
        'resultLabels': {
            'roofArea': 'Roof Area',
            'annualRainfall': 'Annual Rainfall',
            'collectionEfficiency': 'Collection Efficiency',
            'potentialHarvest': 'Potential Harvest',
            'costEstimate': 'Cost Estimate',
            'maintenanceCost': 'Annual Maintenance',
            'waterSavings': 'Annual Water Savings',
            'returnPeriod': 'Return Period',
            'feasibilityScore': 'Feasibility Score',
            'environmentalImpact': 'Environmental Impact',
            'storageRecommendation': 'Storage Recommendation',
            'maintenanceSchedule': 'Maintenance Schedule'
        }
    },
    'hi': {
        // Navigation buttons
        'next': 'आगे बढ़ें',
        'back': 'वापस',
        'submit': 'जमा करें',

        // Landing page
        'title': 'जल - संकल्प',
        'subtitle': 'छत पर वर्षा जल संचयन क्षमता कैलकुलेटर',
        'hackathon': 'स्मार्ट इंडिया हैकाथॉन 2025',
        'startBtn': 'आकलन शुरू करें',

        // Personal Details
        'personalDetails': 'व्यक्तिगत विवरण',
        'personalDetailsSubtitle': 'आपकी बुनियादी जानकारी से शुरू करते हैं',
        'nameLabel': 'आपका नाम',
        'namePlaceholder': 'अपना पूरा नाम दर्ज करें',
        'languageLabel': 'पसंदीदा भाषा',

        // Location Details
        'locationDetails': 'स्थान विवरण',
        'locationSubtitle': 'अपना राज्य और जिला चुनें या सीधे पिनकोड दर्ज करें',
        'locationMethodLabel': 'स्थान चयन विधि',
        'stateDistrictBtn': 'राज्य और जिला',
        'pincodeBtn': 'पिनकोड',
        'gpsBtn': 'GPS स्थान',
        'stateLabel': 'राज्य',
        'districtLabel': 'जिला',
        'pincodeLabel': 'पिनकोड दर्ज करें',
        'pincodePlaceholder': 'उदा., 411001',
        'useGpsBtn': 'GPS स्थान का उपयोग करें',
        'selectedPincodeTitle': 'चयनित पिनकोड',
        'pincodeText': 'पिनकोड:',
        'locationDetailsTitle': 'स्थान विवरण',
        'areaLabel': 'क्षेत्र:',
        'rainfallLabel': 'वार्षिक वर्षा:',
        'groundwaterLabel': 'भूजल स्तर:',

        // Roof Information
        'roofInfo': 'छत की जानकारी',
        'roofSubtitle': 'अपनी छत का प्रकार और क्षेत्रफल बताएं',
        'roofTypeLabel': 'छत का प्रकार',
        'roofTypes': {
            'concrete': 'कंक्रीट (95%)',
            'metal': 'धातु की चादर (90%)',
            'clay': 'मिट्टी की टाइलें (85%)',
            'tiles': 'सिरेमिक टाइलें (80%)'
        },
        'measureAreaLabel': 'छत का क्षेत्रफल कैसे मापना चाहेंगे?',
        'manualEntry': 'मैनुअल एंट्री',
        'totalArea': 'कुल क्षेत्रफल',
        'drawMap': 'मानचित्र पर बनाएं',
        'lengthLabel': 'लंबाई (मीटर)',
        'widthLabel': 'चौड़ाई (मीटर)',
        'totalAreaLabel': 'कुल छत का क्षेत्रफल (वर्ग मीटर)',

        // Additional Information
        'additionalInfo': 'अतिरिक्त जानकारी',
        'additionalSubtitle': 'बेहतर आकलन के लिए वैकल्पिक विवरण (अनुशंसित)',
        'familyMembersLabel': 'परिवार के सदस्यों की संख्या',
        'familyMembersPlaceholder': 'उदा., 4',
        'waterSourceLabel': 'पानी का स्रोत',
        'waterSources': {
            'borewell': 'बोरवेल',
            'municipal': 'नगरपालिका आपूर्ति',
            'other': 'अन्य'
        },
        'waterBillLabel': 'मासिक पानी का बिल (₹)',
        'waterBillPlaceholder': 'उदा., 1500',

        // Results Page
        'resultsTitle': 'आकलन परिणाम',
        'resultsSubtitle': 'आपकी वर्षा जल संचयन क्षमता और सिफारिशें',
        'projectSummary': 'परियोजना सारांश',
        'downloadReport': 'रिपोर्ट डाउनलोड करें',
        'provideFeedback': 'प्रतिक्रिया दें',
        'startOver': 'फिर से शुरू करें',
        'feedbackTitle': 'अपना अनुभव रेट करें',
        'monthlyCollection': 'मासिक संग्रह पैटर्न',
        // Landing Page
        'title': 'जल - संकल्प',
        'subtitle': 'छत वर्षा जल संचयन क्षमता कैलकुलेटर',
        'hackathon': 'स्मार्ट इंडिया हैकाथॉन 2025',
        'startBtn': 'मूल्यांकन शुरू करें',

        // Progress
        'stepOf': 'चरण {n} / 5',
        'progress': '{n}%',

        // Step 1 - Personal Details
        'personalDetails': 'व्यक्तिगत विवरण',
        'personalDetailsSubtitle': 'आइए आपकी बुनियादी जानकारी से शुरू करें',
        'nameLabel': 'आपका नाम',
        'namePlaceholder': 'अपना पूरा नाम दर्ज करें',
        'languageLabel': 'पसंदीदा भाषा',

        // Step 2 - Location Details
        'locationDetails': 'स्थान विवरण',
        'locationSubtitle': 'अपना राज्य और जिला चुनें या सीधे पिनकोड दर्ज करें',
        'locationMethodLabel': 'स्थान चयन विधि',
        'stateDistrictBtn': 'राज्य और जिला',
        'pincodeBtn': 'पिनकोड',
        'gpsBtn': 'जीपीएस स्थान',
        'stateLabel': 'राज्य',
        'districtLabel': 'जिला',
        'pincodeLabel': 'पिनकोड दर्ज करें',
        'pincodePlaceholder': 'उदाहरण, 411001',
        'useGpsBtn': 'जीपीएस स्थान का उपयोग करें',
        'selectedPincodeTitle': 'चयनित पिनकोड',
        'pincodeText': 'पिनकोड:',
        'locationDetailsTitle': 'स्थान विवरण',
        'areaLabel': 'क्षेत्र:',
        'rainfallLabel': 'वार्षिक वर्षा:',
        'groundwaterLabel': 'भूजल स्तर:',

        // Step 3 - Roof Information
        'roofInfo': 'छत की जानकारी',
        'roofSubtitle': 'अपनी छत का प्रकार और क्षेत्रफल निर्दिष्ट करें',
        'roofTypeLabel': 'छत का प्रकार',
        'roofTypes': {
            'concrete': 'कंक्रीट (95%)',
            'metal': 'धातु की चादर (90%)',
            'clay': 'मिट्टी की टाइलें (85%)',
            'tiles': 'सिरेमिक टाइलें (80%)'
        },
        'measureAreaLabel': 'छत का क्षेत्रफल कैसे मापना चाहेंगे?',
        'manualEntry': 'मैनुअल एंट्री',
        'totalArea': 'कुल क्षेत्रफल',
        'drawMap': 'मानचित्र पर आरेखण',
        'lengthLabel': 'लंबाई (मीटर)',
        'widthLabel': 'चौड़ाई (मीटर)',
        'totalAreaLabel': 'कुल छत क्षेत्रफल (वर्ग मीटर)',
        'currentAreaLabel': 'वर्तमान छत क्षेत्रफल:',
        'sqMeters': 'वर्ग मीटर',
        // Map related translations
        'instructionsTitle': 'निर्देश:',
        'mapInstructions': 'अपनी छत का क्षेत्र बनाने के लिए नीचे दिए गए मानचित्र का उपयोग करें। मानचित्र दृश्यों के बीच स्विच करें, अपना स्थान खोजें और अपनी छत की रूपरेखा बनाने के लिए ड्राइंग टूल का उपयोग करें।',
        'satelliteView': 'उपग्रह दृश्य',
        'roadmapView': 'सड़क मानचित्र',
        'hybridView': 'मिश्रित दृश्य',
        'startDrawing': 'आरेखण शुरू करें',
        'clearDrawing': 'आरेखण मिटाएं',
        'finishDrawing': 'आरेखण समाप्त करें',
        'drawnArea': 'आरेखित क्षेत्रफल:',
        'sqMeters': 'वर्ग मीटर',
        
        // Area measurement translations
        'lengthInput': 'लंबाई दर्ज करें',
        'widthInput': 'चौड़ाई दर्ज करें',

        // Step 4 - Additional Information
        'additionalInfo': 'अतिरिक्त जानकारी',
        'additionalSubtitle': 'बेहतर मूल्यांकन के लिए वैकल्पिक विवरण (अनुशंसित)',
        'familyMembersLabel': 'परिवार के सदस्यों की संख्या',
        'familyMembersPlaceholder': 'उदाहरण, 4',
        'waterSourceLabel': 'जल स्रोत',
        'waterSources': {
            'borewell': 'बोरवेल',
            'municipal': 'नगरपालिका आपूर्ति',
            'other': 'अन्य'
        },
        'waterBillLabel': 'मासिक जल बिल (₹)',
        'waterBillPlaceholder': 'उदाहरण, 1500',

        // Step 5 - Results
        'resultsTitle': 'मूल्यांकन परिणाम',
        'resultsSubtitle': 'आपकी वर्षा जल संचयन क्षमता और सिफारिशें',
        'projectSummary': 'परियोजना सारांश',
        'harvestPotential': 'संचयन क्षमता',
        'monthlyPattern': 'मासिक संग्रह पैटर्न',
        'feasibilityTitle': 'व्यवहार्यता मूल्यांकन',
        'downloadReport': 'रिपोर्ट डाउनलोड करें',
        'provideFeedback': 'प्रतिक्रिया दें',
        'startOver': 'फिर से शुरू करें',
        'feedbackTitle': 'अपना अनुभव रेट करें',
        'submitFeedback': 'प्रतिक्रिया जमा करें',

        // Navigation
        'back': 'वापस',
        'next': 'अगला',
        'calculate': 'परिणाम की गणना करें',
        
        // Monthly Collection Pattern
        'monthlyCollection': 'मासिक संग्रह पैटर्न',
        'monthlyCollectionChart': {
            'jan': 'जनवरी',
            'feb': 'फरवरी',
            'mar': 'मार्च',
            'apr': 'अप्रैल',
            'may': 'मई',
            'jun': 'जून',
            'jul': 'जुलाई',
            'aug': 'अगस्त',
            'sep': 'सितंबर',
            'oct': 'अक्टूबर',
            'nov': 'नवंबर',
            'dec': 'दिसंबर'
        },
        'resultLabels': {
            'roofArea': 'छत का क्षेत्रफल',
            'annualRainfall': 'वार्षिक वर्षा',
            'collectionEfficiency': 'संग्रह दक्षता',
            'potentialHarvest': 'संभावित संग्रह',
            'costEstimate': 'लागत अनुमान',
            'maintenanceCost': 'वार्षिक रखरखाव',
            'waterSavings': 'वार्षिक जल बचत',
            'returnPeriod': 'वापसी अवधि',
            'feasibilityScore': 'व्यवहार्यता स्कोर',
            'environmentalImpact': 'पर्यावरणीय प्रभाव',
            'storageRecommendation': 'भंडारण की सिफारिश',
            'maintenanceSchedule': 'रखरखाव अनुसूची'
        }
    }
};