import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import {experiences, cv_skills,  languages, full_name, accounts, mail, phone} from "@assets/resume.json"
import { capitalize } from '../../helpers/string.helper';

export default function CvPdf(){

    // Create styles
    const styles = StyleSheet.create({
        header: {
            backgroundColor: '#008',
            paddingHorizontal: '20px',
            paddingVertical: '20px',
            color: 'white',
        },
        flexHorizontal: {
            flexDirection: 'row',
        },
        flexSpaceBetween: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        mainContent: {
            marginTop: '15px',
            flexDirection: 'row',
            color: 'black'
        },
        firstColumn: {
            width: '35%',
            paddingHorizontal: '20px'
        },
        secondColumn: {
            width: '65%',
            paddingLeft: '5px',
            paddingRight: '20px'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        },
        title: {
            fontSize: 16,
            fontWeight: 'bold',
            borderBottom: '1px',
            paddingBottom: '2px',
            marginBottom: '5px',
            marginTop: '10px'
        },
        personnal_subtitle: {
            marginTop: '10px',
            fontSize: 12,
            fontWeight: 'demibold',
        },
        personnal_value: {
            marginTop: '4px',
            fontSize: 11,
        },

        section_title: {
            fontSize: 14,
            fontWeight: 'extrabold',
            marginBottom: '3px',
            marginTop: '8px'
        },
        section_subtitle: {
            fontSize: 12,
            fontWeight: 'semibold',
            fontStyle: 'italic',
            marginBottom: '2px'
        },
        section_value: {
            fontSize: 11,
        },
  });

    return(
        <Document>
            <Page size="A4">
                <View style={styles.header}>
                    <Text>Curriculum Vitae</Text>
                </View>
                <View style={styles.mainContent}>
                    <View style={styles.firstColumn}>
                        <Text style={styles.title}>Données personnelles</Text>
                        <View>
                            <Text style={styles.personnal_subtitle}>Nom</Text>
                            <Text style={styles.personnal_value}>{full_name}</Text>
                        </View>
                        <View>
                            <Text style={styles.personnal_subtitle}>Téléphone</Text>
                            <Text style={styles.personnal_value}>{phone}</Text>
                        </View>
                        <View>
                            <Text style={styles.personnal_subtitle}>Adresse e-mail</Text>
                            <Text style={styles.personnal_value}>{mail}</Text>
                        </View>
                        {accounts.map(item => (
                            <View>
                                <Text style={styles.personnal_subtitle}>{capitalize(item.name)}</Text>
                                <Text style={styles.personnal_value}>{item.link}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.secondColumn}>
                        <Text style={styles.title}>Expériences</Text>
                        {experiences.filter(item => item.type === 'job').map(item => (
                            <View>
                                <Text style={styles.section_title}>{item.place}</Text>
                                <Text style={styles.section_subtitle}>de {item.from} à {item.to} - {item.role}</Text>
                                <Text style={styles.section_value}>{item.description}</Text>
                            </View>
                        ))}

                        <Text style={styles.title}>Etudes</Text>
                        {experiences.filter(item => item.type === 'school').map(item => (
                            <View>
                                <Text style={styles.section_title}>{item.place}</Text>
                                <Text style={styles.section_subtitle}>de {item.from} à {item.to} - {item.role}</Text>
                                <Text style={styles.section_value}>{item.description}</Text>
                            </View>
                        ))}

                        <Text style={styles.title}>Compétences</Text>
                        {cv_skills.map(item => (
                            <View style={{...styles.flexHorizontal, ...{marginBottom: '3px', marginTop: '8px'}}}>
                                <Text style={styles.section_subtitle}>{item.category}: </Text>
                                <Text style={styles.section_value}>{item.items.join(', ')}</Text>
                            </View>
                        ))}

                        <Text style={styles.title}>Langues</Text>
                        {languages.map(item => (
                            <View style={{...styles.flexSpaceBetween, ...{marginTop: '8px'}}}>
                                <Text style={styles.section_subtitle}>{item.name}</Text>
                                <Text style={styles.section_value}>{item.level}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </Page>
        </Document>
    );

}