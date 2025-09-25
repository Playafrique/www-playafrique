import { StructureBuilder } from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
    S.list()
        .title('Content')
        .items([
            // Site Settings
            S.listItem()
                .title('Site Settings')
                .child(
                    S.document()
                        .schemaType('siteSettings')
                        .documentId('siteSettings'),
                ),

            S.divider(),

            // Add all remaining document types
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    !['siteSettings'].includes(listItem.getId() as string),
            ),
        ])
