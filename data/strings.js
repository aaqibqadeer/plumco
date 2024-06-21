export const strings = {}

strings.title = ''
strings.location = '1101 Opal Ct, Hagerstown, MD 21740'
strings.contact = '+1 (240) 576-0397'

const servicesObject = {
  home: {
    name: 'Home Maintenance & Repairs',
    Short: 'Keeping your home in tip-top shape with routine tasks and fixes.',
    Long: ' From fixing leaky faucets and patching drywall to assembling furniture and installing shelves, we tackle those odd jobs that keep your home running smoothly.',
  },
  plumbing: {
    name: 'Plumbing',
    Short: 'Solving your drips, clogs, and leaks for a worry-free flow.',
    Long: " Whether it's a running toilet, a clogged drain, or a leaky faucet, we handle all your plumbing needs. We can also install new fixtures, repair water heaters, and address other plumbing issues.",
  },
  hvac: {
    name: 'HVAC',
    Short:
      'Keeping your home comfortable year-round with expert heating and cooling services.',
    Long: ' From routine maintenance on your furnace or air conditioner to thermostat installation and filter replacements, we ensure your home stays comfortable in every season.',
  },
  electrical: {
    name: 'Electrical',
    Short:
      'Safely handling your electrical needs, from installations to troubleshooting.',
    Long: ' We provide safe and reliable electrical services, including installing light fixtures, replacing outlets and switches, troubleshooting electrical problems, and more.',
  },
  painting: {
    name: 'Painting & Decorating',
    Short:
      'Transforming your space with fresh paint and a touch of creativity.',
    Long: ' We offer interior and exterior painting services, from a fresh coat on the walls to detailed trim work. We can also help you choose the perfect colors and finishes for your space.',
  },
  landscaping: {
    name: 'Landscaping & Yard Work',
    Short: 'Maintaining a beautiful outdoor space you can enjoy.',
    Long: ' Our landscaping services include mowing, edging, trimming, weeding, and leaf removal. We can also help you with planting, mulching, and other gardening tasks.',
  },
  other: {
    name: 'Other Services',
    Short: 'A range of additional services to complete your to-do list.',
    Long: ' We offer a variety of other services, such as pressure washing, window cleaning, furniture assembly, and junk removal. Contact us to see how we can help!',
  },
}

export const Services = [
  {
    Id: '1',
    sImg: '/images/service/1.webp',
    sIcon: '/images/icon/kitchen-utensils.png',
    slug: 'home-maintenance-repairs',
    sTitle: 'Home Maintenance & Repairs',
    description:
      'Keeping your home in tip-top shape with routine tasks and fixes.',
    longDescription:
      "A handyman can handle all those pesky little repairs around your home that you just don't have time for. From fixing leaky faucets and toilets to replacing light fixtures and switches, they can tackle a variety of tasks, making your home more functional and comfortable. They can also help with small repairs like fixing drywall cracks and holes, installing shelves and mirrors, replacing cabinet hardware, and repairing furniture. If you have a door hinge that squeaks or a window screen that's torn, a handyman can fix it in a jiffy.",
    ssImg1: '/images/service-single/2.jpg',
    ssImg2: '/images/service-single/3.jpg',
    listOfServices: [
      'Building decks and patios',
      'Installing kitchen and bathroom cabinets',
      'Refinishing hardwood floors',
      'Adding insulation',
      'Adding a new room or extension',
      'Installing a new roof',
      'Replacing siding',
    ],
  },
  {
    Id: '2',
    sImg: '/images/service/2.webp',
    sIcon: '/images/icon/gas-stove.png',
    slug: 'Plumbing',
    sTitle: 'Plumbing',
    description: 'Solving your drips, clogs, and leaks for a worry-free flow.',
    longDescription:
      'A handyman can help you with all your plumbing needs, from fixing leaky pipes and faucets to installing new plumbing fixtures. They can clear drain clogs and prevent future issues. If your water heater is on the fritz, a handyman can replace it with a new one. They can also install garbage disposals, making your kitchen more convenient.',
    ssImg1: '/images/service-single/2.jpg',
    ssImg2: '/images/service-single/3.jpg',
    listOfServices: [
      'Fixing leaky pipes and faucets',
      'Installing new plumbing fixtures',
      'Clearing drain clogs',
      'Replacing water heaters',
      'Installing garbage disposals',
    ],
  },
  {
    Id: '3',
    sImg: '/images/service/3.webp',
    sIcon: '/images/icon/water-tap.png',
    slug: 'HVAC',
    sTitle: 'HVAC',
    description:
      'Keeping your home comfortable year-round with expert heating and cooling services.',
    longDescription:
      'Maintaining your HVAC system is crucial for keeping your home comfortable and energy-efficient. A handyman can clean and maintain your air conditioners and furnaces, ensuring optimal performance. They can replace HVAC filters regularly and troubleshoot and repair any problems that arise. If your old HVAC unit needs replacing, a handyman can help you choose and install a new one.',
    ssImg1: '/images/service-single/2.jpg',
    ssImg2: '/images/service-single/3.jpg',
    listOfServices: [
      'Cleaning and maintaining air conditioners and furnaces',
      'Replacing HVAC filters',
      'Troubleshooting and repairing HVAC systems',
      'Installing new HVAC units',
    ],
  },
  {
    Id: '4',
    sImg: '/images/service/4.webp',
    sIcon: '/images/icon/sink.png',
    slug: 'Electrical',
    sTitle: 'Electrical',
    description:
      'Safely handling your electrical needs, from installations to troubleshooting.',
    longDescription:
      'Electrical work requires specialized knowledge and skills. A handyman can help you with tasks like installing new electrical outlets and switches, troubleshooting and repairing electrical problems, and replacing light fixtures. They can also install ceiling fans and run new electrical lines, making your home safer and more functional.',
    ssImg1: '/images/service-single/2.jpg',
    ssImg2: '/images/service-single/3.jpg',
    listOfServices: [
      'Installing new electrical outlets and switches',
      'Troubleshooting and repairing electrical problems',
      'Replacing light fixtures',
      'Installing ceiling fans',
      'Running new electrical lines',
    ],
  },
  {
    Id: '5',
    sImg: '/images/service/5.webp',
    sIcon: '/images/icon/basement.png',
    slug: 'painting-decorating',
    sTitle: 'Painting & Decorating',
    description:
      'Transforming your space with fresh paint and a touch of creativity.',
    longDescription:
      'A handyman can help you spruce up the inside of your home with various maintenance services. From painting walls and ceilings to replacing flooring, they can give your home a fresh look. They can also help with tasks like installing window treatments, hanging curtains and blinds, and assembling furniture. These services make your home more comfortable and enjoyable to live in.',
    ssImg1: '/images/service-single/2.jpg',
    ssImg2: '/images/service-single/3.jpg',
    listOfServices: [
      'Painting walls and ceilings',
      'Replacing flooring',
      'Installing window treatments',
      'Hanging curtains and blinds',
      'Assembling furniture',
    ],
  },
  {
    Id: '6',
    sImg: '/images/service/6.webp',
    sIcon: '/images/icon/remodeling.png',
    slug: 'landscaping-yard-work',
    sTitle: 'Landscaping & Yard Work',
    description: 'Maintaining a beautiful outdoor space you can enjoy.',
    longDescription:
      'Our landscaping services include mowing, edging, trimming, weeding, and leaf removal. We can also help you with planting, mulching, and other gardening tasks.  A handyman can help you maintain your outdoor space, keeping it looking beautiful and functional. They can mow lawns, trim hedges and shrubs, rake leaves, and plant flowers and shrubs. They can also fertilize your lawn, ensuring it remains healthy and lush.',
    ssImg1: '/images/service-single/2.jpg',
    ssImg2: '/images/service-single/3.jpg',
    listOfServices: [
      'Mowing lawns',
      'Trimming hedges and shrubs',
      'Raking leaves',
      'Planting flowers and shrubs',
      'Fertilizing lawns',
    ],
  },
  {
    Id: '7',
    sImg: '/images/service/7.webp',
    sIcon: '/images/icon/remodeling.png',
    slug: 'other-services',
    sTitle: 'Other Services',
    description: 'A range of additional services to complete your to-do list.',
    longDescription:
      "We offer a variety of other services, such as pressure washing, window cleaning, furniture assembly, and junk removal. Contact us to see how we can help!. A handyman can help you with various cleaning tasks, making your home sparkle. They can deep clean houses, clean windows, and even clean carpets. This can be a great option if you're short on time or need a professional touch for a special occasion.",
    ssImg1: '/images/service-single/2.jpg',
    ssImg2: '/images/service-single/3.jpg',
    listOfServices: [
      'Fixing leaky faucets and toilets',
      'Replacing light fixtures and switches',
      'Repairing drywall cracks and holes',
      'Installing shelves and mirrors',
      'Replacing cabinet hardware',
      'Repairing furniture',
      'Fixing door hinges and locks',
      'Replacing window screens',
      'Re-grouting tile',
      'Fixing loose floorboards',
      'Deep cleaning houses',
      'Window cleaning',
      'Carpet cleaning',
    ],
  },
]
