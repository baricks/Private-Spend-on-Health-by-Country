var countriesWithPrivateSpend = {};

_.each(gapminderData, function(datum){
    var countryName = datum['Private expenditure on health as percentage of total expenditure on health'];
    var privateSpendOnHealth = datum['2010'];

    countriesWithPrivateSpend[countryName] = privateSpendOnHealth;
});

_.each(countriesWithPrivateSpend,function(oneCountryWithPrivateSpend, oneCountryName){
        document.write('<svg height="70" width="800">');
        document.write('<text x="0" y="17"> ' + oneCountryName + ' (' + Math.ceil(oneCountryWithPrivateSpend) + '%)' + ' </text>'  );
        document.write('<rect x="0" y="30" height="20" width="800" fill=#F4F4F4></rect>');
        document.write('<rect x="0" y="30" height="20" width=" +' +Math.ceil(oneCountryWithPrivateSpend*8)+'" fill=#B7F9EC></rect>');
        document.write('</svg>');
});
    
