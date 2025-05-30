import { View, StyleSheet, Text } from 'react-native'
import * as Yup from 'yup'
import FormField from './FormField'
import colors from '@/config/colors'
import Form from './Form'
import Button from './Button'

const OrganizationForm = (): JSX.Element => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Organization Name is required')
      .min(2, 'Organization Name must be at least 2 characters')
      .max(50, 'Organization Name must be at most 50 characters')
  })

  const handleSubmit = async (formValues: any, { resetForm }: any): Promise<void> => {
    console.log(formValues, 'lol')
  }

  return (
    <View style={styles.container}>
      <Form
        initialValues={{
          name: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <View style={styles.inputField}>

          <FormField
            label='Organization Name' name='name' placeholder='Create Organization'
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button>
            <Text
              style={{ color: 'white', fontSize: 14, fontWeight: '500' }}
            >
              Save
            </Text>
          </Button>
        </View>
      </Form>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white
  },
  heading: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 20
  },
  form: {
    marginBottom: 20
  },
  inputField: {
    marginTop: 18
  },
  buttonContainer: {
    marginTop: 16,
    width: 120
  }
})

export default OrganizationForm
