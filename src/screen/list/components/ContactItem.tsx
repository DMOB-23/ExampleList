import { Text, View } from 'react-native'
import { ContactItemProps } from './interface'

const ContactItem = ({ contact }: ContactItemProps) => {
    return (
        <View>
            <Text>{contact.name}</Text>
            <Text>{contact.email}</Text>
        </View>
    )
}

export default ContactItem