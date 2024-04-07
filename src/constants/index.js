import { agric, book, business, shop } from "../assets/icons"
import { girls, woman, orphans } from "../assets/images"
import { whatsapp, facebook, instagram } from "../assets/icons"
export const socials = [
    {
        'label': 'Facebook', 
        'image': facebook,
        'link': 'https://facebook.com'
    },
    {
        'label': 'Whatsapp', 
        'image': whatsapp,
        'link': 'https://whatsapp.com'
    },
  
    {
        'label': 'Instagram', 
        'image': instagram,
        'link': 'https://facebook.com'
    },
]

export const navLinks = [
    {href: '#home', label: 'Home'},
    {href: '#about', label: 'About'},
    {href: '#gallery', label: 'Gallery'},
    {href: '#contact-us', label: 'Contact us'},
]

export const aboutItemList =[
    {img:book, label:"Education", description: "Payments Of Tuition Fees, WAEC,NECO & JAMB For Orphans And The Girl Child"},
    {img:shop, label:"Business", description: "Helping widows who are interested in farming and small trade/businesses. To ensure they get the help they need in achieving their goal."},
    {img:business, label:"Entrepreneurship Program", description: "Empowering Widows & Orphans With Startups Capital For Small Scale Businesses In Rural Communities"},
    {img:agric, label:"Agricultural empowerment", description: "Empowering Widows With Foods And Agricultural Equipments Such As Seedlings, Fertilizer And Pesticides during Farming Season"},

]

export const objectivesList = [
    {
        imgURL: orphans,
        label: 'Orphans',
        body: [
            "Increasing access for orphans to primary and secondary education and vocational training and assisting them develop health lifestyles to become responsible citizens.",
            "Providing legal support which enable them secure property rights.",
            "Providing healthcare insurance to the orphans and creating awareness for proper lifestyle."
        ],
        reverse: false
    },
    {
        imgURL: woman,
        label: 'Widows',
        body: [
            "To enhance the dignity and social wellbeing of widows through advocacy, education, training and development programs and networking.",
            "Improving the lives of widows, Orphans and destitute persons through economic and social empowerment, access to basic needs, advocating to their human rights.",
            "Helping widows in providing basic financial supports for their families."
        ],
        reverse: true
    },
    {
        imgURL: girls,
        label: 'Girl child Education/Less Privileged',
        body: [
            "Helping the less privileged in educational sector",
            "Standing in for the less privileged children. In the aspect of financial and social services.",
            "Making sure their voices are heard and them relevant in the society."
        ],
        reverse:false,
    }
]