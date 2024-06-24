
const Button = ({lable, onPress, isLoading, disabled}) => {

    return <TouchableOpacity disabled={disabled  || isLoading} onPress={onPress} style={styles.button}>
   {isLoading ? <ActivityIndicator /> : <Text style={styles.button_text}>
        {lable}
    </Text>}
</TouchableOpacity>