import { Text, Avatar } from "@rneui/themed";
import { View, ActivityIndicator, Image } from "react-native"
import styles from "../styles"

export default function Post({ post }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Avatar source={{ uri: post.profilePhoto }} rounded />
                <Text>{post.userName}</Text>
            </View>
            <Image source={{ uri: post.photoURL}} style={styles.image}
            PlaceholderContent={<ActivityIndicator />}/>
            <Text style={styles.description}>{post.description}</Text>
        </View>
    )
}