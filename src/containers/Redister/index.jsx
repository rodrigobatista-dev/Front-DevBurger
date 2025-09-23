/* eslint-disable no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import Logo from '../../assets/Logo.svg'
import { Button } from '../../components/Button' // eslint-disable-line no-unused-vars
import { api } from '../../services/api'
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
} from './styles'

export function Register() {
  const schema = yup
    .object({
      name: yup.string().required('O nome é Obrigaório'),
      email: yup
        .string()
        .email('Digite um e-mail é inválido!')
        .required('O e-mail é obrigatório!'),
      password: yup
        .string()
        .min(6, 'A senha tem que conter 6 caracteres')
        .required('A senha é obrigatória'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Confirme sua senha'),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        toast.success('Conta criada com sucesso!')
      } else if (status === 400) {
        toast.error('Email já cadastro! Faça o login para continuar ')
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error(' Falha no sistema! Tente novamente')
    }
  }

    return (
      <Container>
        <LeftContainer>
          <img src={Logo} alt="logo-devburger" />
        </LeftContainer>
        <RightContainer>
          <Title>Criar Conta</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
              <label>Nome</label>
              <input type="text" {...register('name')} />
              <p>{errors?.name?.message}</p>
            </InputContainer>

            <InputContainer>
              <label>Email</label>
              <input type="email" {...register('email')} />
              <p>{errors?.email?.message}</p>
            </InputContainer>

            <InputContainer>
              <label>Senha</label>
              <input type="password" {...register('password')} />
              <p>{errors?.password?.message}</p>
            </InputContainer>

            <InputContainer>
              <label>Confirmar Senha</label>
              <input type="password" {...register('confirmPassword')} />
              <p>{errors?.confirmPassword?.message}</p>
            </InputContainer>

            <Button type="submit">Criar Conta</Button>
          </Form>
          <p>
            Já possui conta? <a>Clique aqui</a>
          </p>
        </RightContainer>
      </Container>
    )
  }

