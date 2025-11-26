/* eslint-disable no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup'
import { ImageIcon } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import api from '../../../services/api'
import {
  Container,
  Form,
  InputGroup,
  Label,
  Input,
  LabelUpload,
  Select,
  SubmitButton,
  ErrorMessage,
  ContainerCheckbox,
} from './styles'

const schema = yup.object({
  name: yup.string().required('Digite o nome do produto'),
  price: yup
    .number()
    .positive()
    .required('Digite o preço do produto')
    .typeError('Digite o preço do produto'),
  category: yup.object().required('Selecione a categoria'),
   offer: yup.boolean(),
  file: yup
    .mixed()
    .test('required', 'Faça o upload da imagem do produto', (value) => {
      return value && value.length > 0
    })
    .test('fileSize', 'Carregar arquivos até 5MB', (value) => {
      return value && value.length > 0 && value[0].size <= 5000000
    })
    .test('type', 'Carregue apenas imagens PNG ou JPEG', (value) => {
      return (
        value &&
        value.length > 0 &&
        (value[0].type === 'image/jpeg' ||
          value[0].type === 'image/png' ||
          value[0].type === 'image/jpg')
      )
    }),
})

export function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories')

      setCategories(data)
    }
    loadCategories()
  }, [])

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = async (data) => {
    const productFormData = new FormData()

    productFormData.append('name', data.name)
    productFormData.append('price', data.price * 100)
    productFormData.append('category_id', data.category.id)
    productFormData.append('file', data.file[0])
    productFormData.append('offer', data.offer)

    await toast.promise(api.post('/products', productFormData), {
      pending: 'Adicionando novo produto...',
      success: 'Produto adicionado com sucesso!',
      error: 'Erro ao adicionar o produto, tente novamente.',
    })

    setTimeout(() => {
      navigate('/admin/produtos')
    }, 2000)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Name</Label>
          <Input type="text" {...register('name')} />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Preço</Label>
          <Input type="number" {...register('price')} />
          <ErrorMessage>{errors?.price?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <LabelUpload>
            <ImageIcon />
            <input
              type="file"
              {...register('file')}
              accept="image/png, image/jpeg, image/jpg"
              onChange={(value) => {
                setFileName(value?.target?.files[0]?.name)
                register('file').onChange(value)
              }}
            />
            {fileName ? fileName : 'Upload Imagem do Produto'}
          </LabelUpload>
          <ErrorMessage>{errors?.file?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Categoria</Label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder="Selecione a categoria"
                menuPortalTarget={document.body}
              />
            )}
          />

          <ErrorMessage>{errors?.category?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
                  <ContainerCheckbox>
                    <input
                      type="checkbox"
                      
                    />
                    <Label>Produto em Oferta?</Label>
                  </ContainerCheckbox>
                </InputGroup>

        <SubmitButton>Adicionar Produto</SubmitButton>
      </Form>
    </Container>
  )
}
