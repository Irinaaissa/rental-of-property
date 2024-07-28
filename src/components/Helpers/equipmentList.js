export const equipmentList = [
    { icon: 'icon-airconditioner', label: 'AC', key: 'airConditioner' },
    
    { icon: 'icon-kitchen', label: 'kitchen', key: 'kitchen' },
    { icon: 'icon-beds', label: 'beds', key: 'beds' },
    { icon: 'icon-tv', label: 'TV', key: 'TV' },
    { icon: 'icon-cd', label: 'CD', key: 'CD' },
    { icon: 'icon-radio', label: 'radio', key: 'radio' },
    { icon: 'icon-shower', label: 'shower', key: 'shower' },
    { icon: 'icon-toilet', label: 'toilet', key: 'toilet' },
    { icon: 'icon-freezer', label: 'freezer', key: 'freezer' },
    { icon: 'icon-hob', label: 'hob', key: 'hob' },
    { icon: 'icon-mdi_gas', label: 'gas', key: 'gas' },
    { icon: 'cat-microwave', label: 'microwave', key: 'microwave' }
];
export const equipmentFilterIcons = [
    { icon: 'icon-kitchen', label: 'kitchen', key: 'kitchen' },
    { icon: 'icon-transmission', label: 'Automatic', key: 'transmission' },
    { icon: 'icon-tv', label: 'TV', key: 'TV' },
    { icon: 'icon-airconditioner', label: 'Conditioner', key: 'airConditioner' },
    { icon: 'icon-shower', label: 'shower', key: 'shower' },
  ];

export const vehicleTypes = [
    { icon: 'Van', label: 'Van',key:"Van" },
    { icon: 'Fully-Integrated', label: 'Fully Integrated',key:"Fully Integrated" },
    { icon: 'Alcove', label: 'Alcove' ,key:"Alcove"}
];

export const iconCard = [
    { icon: 'icon-adults', label: 'adults', key: 'adults' },
    { icon: 'icon-transmission', label: '', key: 'transmission' },
    { icon: 'icon-engine', label: '', key: 'engine' },
    { icon: 'icon-kitchen', label: 'kitchen', key: 'kitchen' },
    { icon: 'icon-beds', label: 'beds', key: 'beds' },
    { icon: 'icon-form', label: 'AC', key: 'airConditioner' },

];
export const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        useGrouping: false
    }).format(amount);
};